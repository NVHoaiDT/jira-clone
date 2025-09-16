import React from 'react';
import { Routes, Route, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import useApi from 'shared/hooks/api';
import useQueryParamModal from 'shared/hooks/queryParamModal';

import { updateArrayItemById } from 'shared/utils/javascript';
import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import { PageLoader, PageError, Modal } from 'shared/components';

import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';
import IssueSearch from './IssueSearch';
import IssueCreate from './IssueCreate';
import ProjectSettings from './ProjectSettings';

import { ProjectPage } from './Styles';

const Project = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');
  // const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');
  const issueSearchModalHelpers = useQueryParamModal('issue-search');
  const issueCreateModalHelpers = useQueryParamModal('issue-create');

  const [{ data, error, setLocalData }, fetchProject] = useApi.get('/project');

  if (!data) return <PageLoader />;
  if (error) return <PageError />;

  const { project } = data;

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setLocalData((currentData) => ({
      project: {
        ...currentData.project,
        issues: updateArrayItemById(currentData.project.issues, issueId, updatedFields),
      },
    }));
  };

  // Check if we're at the base project route (no sub-path)
  const isProjectRoot = location.pathname === '/project' || location.pathname === '/project/';
  const basePath = '/project';

  return (
    <ProjectPage>
      <NavbarLeft
        issueSearchModalOpen={issueSearchModalHelpers.open}
        issueCreateModalOpen={issueCreateModalHelpers.open}
      />

      <Sidebar project={project} />

      {issueSearchModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-search"
          variant="aside"
          width={600}
          onClose={issueSearchModalHelpers.close}
          renderContent={() => <IssueSearch project={project} />}
        />
      )}

      {issueCreateModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-create"
          width={800}
          withCloseIcon={false}
          onClose={issueCreateModalHelpers.close}
          renderContent={(modal) => (
            <IssueCreate
              project={project}
              fetchProject={fetchProject}
              onCreate={() => navigate(`${basePath}/board`)}
              modalClose={modal.close}
            />
          )}
        />
      )}

      <Routes>
        <Route index element={<Navigate to={`${basePath}/board`} replace />} />
        <Route
          path="board/*"
          element={
            <Board
              project={project}
              fetchProject={fetchProject}
              updateLocalProjectIssues={updateLocalProjectIssues}
            />
          }
        />
        <Route
          path="settings"
          element={<ProjectSettings project={project} fetchProject={fetchProject} />}
        />
      </Routes>

      {/* Redirect if we're at project root */}
      {isProjectRoot && <Navigate to={`${basePath}/board`} replace />}
    </ProjectPage>
  );
};

export default Project;

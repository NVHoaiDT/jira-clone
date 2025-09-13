import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';

import useMergeState from 'shared/hooks/mergeState';
import { Breadcrumbs, Modal } from 'shared/components';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';
import IssueDetails from './IssueDetails';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

const ProjectBoard = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const [filters, mergeFilters] = useMergeState(defaultFilters);

  // Extract base path from current location
  const basePath = location.pathname.replace(/\/issues\/.*$/, '');

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Kanban Board']} />
      <Header />
      <Filters
        projectUsers={project.users}
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <Lists
        project={project}
        filters={filters}
        updateLocalProjectIssues={updateLocalProjectIssues}
      />
      <Routes>
        <Route
          path="issues/:issueId"
          element={
            <IssueDetailsModal
              project={project}
              fetchProject={fetchProject}
              updateLocalProjectIssues={updateLocalProjectIssues}
              basePath={basePath}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </Fragment>
  );
};

// Separate component for the modal to handle the issue ID parameter
const IssueDetailsModal = ({
  project,
  fetchProject,
  updateLocalProjectIssues,
  basePath,
  navigate,
}) => {
  const { issueId } = useParams();

  return (
    <Modal
      isOpen
      testid="modal:issue-details"
      width={1040}
      withCloseIcon={false}
      onClose={() => navigate(basePath)}
      renderContent={(modal) => (
        <IssueDetails
          issueId={issueId}
          projectUsers={project.users}
          fetchProject={fetchProject}
          updateLocalProjectIssues={updateLocalProjectIssues}
          modalClose={modal.close}
        />
      )}
    />
  );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { ProjectCategoryCopy } from 'shared/constants/projects';
import { Icon, ProjectAvatar } from 'shared/components';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSidebar = ({ project }) => {
  const location = useLocation();

  // Extract base path (e.g., "/project" from "/project/board")
  const basePath = location.pathname.split('/').slice(0, 2).join('/') || '/project';

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{project.name}</ProjectName>
          <ProjectCategory>{ProjectCategoryCopy[project.category]} project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem(basePath, 'Kanban Board', 'board', '/board')}
      {renderLinkItem(basePath, 'Project settings', 'settings', '/settings')}
      <Divider />
      {renderLinkItem(basePath, 'Releases', 'shipping')}
      {renderLinkItem(basePath, 'Issues and filters', 'issues')}
      {renderLinkItem(basePath, 'Pages', 'page')}
      {renderLinkItem(basePath, 'Reports', 'reports')}
      {renderLinkItem(basePath, 'Components', 'component')}
    </Sidebar>
  );
};

const renderLinkItem = (basePath, text, iconType, path) => {
  const isImplemented = !!path;

  const linkItemProps = isImplemented
    ? {
        as: NavLink,
        to: `${basePath}${path}`,
        // React Router v6 uses different active class props
        className: ({ isActive }) => (isActive ? 'active' : ''),
      }
    : { as: 'div' };

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
    </LinkItem>
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;

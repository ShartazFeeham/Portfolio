import CodeIcon from '../components/detective/icons/CodeIcon';
import DatabaseIcon from '../components/detective/icons/DatabaseIcon';
import ToolsIcon from '../components/detective/icons/ToolsIcon';
import MiscIcon from '../components/detective/icons/MiscIcon';

export const MAIN_NODES = [
  {
    id: 'programming', label: 'PROGRAMMING', icon: CodeIcon,
    x: 14, y: 12, rot: -6, pinColor: '#cc2222',
    children: [
      { text: 'Java', type: 'sticky', rot: -12 },
      { text: 'JavaScript', type: 'card', rot: 4 },
      { text: 'C#', type: 'sticky', rot: 14 },
      { text: 'Spring Boot', type: 'card', rot: -8 },
      { text: 'ReactJS', type: 'sticky', rot: 7 },
      { text: 'Bootstrap', type: 'card', rot: -3 },
    ],
  },
  {
    id: 'database', label: 'DATABASE & ORM', icon: DatabaseIcon,
    x: 62, y: 8, rot: 5, pinColor: '#1a4f7a',
    children: [
      { text: 'PostgreSQL', type: 'card', rot: -5 },
      { text: 'MySQL', type: 'sticky', rot: 10 },
      { text: 'JPA', type: 'card', rot: -14 },
      { text: 'Hibernate', type: 'sticky', rot: 3 },
    ],
  },
  {
    id: 'tools', label: 'TOOLS & DEVOPS', icon: ToolsIcon,
    x: 38, y: 58, rot: -3, pinColor: '#2d6a2e',
    children: [
      { text: 'Kafka', type: 'sticky', rot: 8 },
      { text: 'Git', type: 'card', rot: -10 },
      { text: 'Jira', type: 'sticky', rot: 4 },
      { text: 'Confluence', type: 'card', rot: -6 },
      { text: 'Docker', type: 'sticky', rot: 12 },
      { text: 'Jenkins', type: 'card', rot: -4 },
      { text: 'Kibana', type: 'sticky', rot: 7 },
    ],
  },
  {
    id: 'misc', label: 'CORE SKILLS', icon: MiscIcon,
    x: 82, y: 52, rot: 7, pinColor: '#b8860b',
    children: [
      { text: 'Data Structures', type: 'card', rot: -7 },
      { text: 'Algorithms', type: 'sticky', rot: 11 },
      { text: 'Design Patterns', type: 'card', rot: -3 },
    ],
  },
];

export const MAIN_CONNECTIONS = [
  ['programming', 'database'],
  ['programming', 'tools'],
  ['database', 'tools'],
  ['database', 'misc'],
  ['tools', 'misc'],
];

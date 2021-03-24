import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'View All',
    path: '/all',
  },
  {
    title: 'Categories',
    // path: '/reports',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Women',
        path: '/categories/women',
        // cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        // cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
      }
    ]
	},
	{
    title: 'Reports',
    path: '/reports',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
      }
    ]
  },
  {
    title: 'About',
    path: '/about',
  },
//   {
//     title: 'Team',
//     path: '/team',
//   }
];
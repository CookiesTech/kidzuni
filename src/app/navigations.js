export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        name: 'Questions',
        path: '/admin/questions',
        icon: 'dashboard',
    },
    {
        label: 'PAGES',
        type: 'label',
    },
    {
        name: 'Standard Master',
        icon: 'favorite',
        children: [
            {
                name: 'Standard List',
                iconText: 'SI',
                path: '/admin/standardsList',
            },
            {
                name: 'Add Standard',
                iconText: 'SU',
                path: '/admin/add_standard',
            },
        ],
    },

    {
        name: 'Subject Master',
        icon: 'trending_up',
        children: [
            {
                name: 'Subject List',
                iconText: 'SI',
                path: '/admin/subjectsList',
            },
            {
                name: 'Subject Add',
                iconText: 'SI',
                path: '/admin/add_subject',
            },
        ],
    },
    {
        name: 'Teacher Master',
        icon: 'security',
        children: [
            {
                name: 'Add Teacher',
                iconText: 'SU',
                path: '/admin/add_teacher',
            },
            {
                name: 'Teacher List',
                iconText: 'SI',
                path: '/admin/teachersList',
            },
        ],
    },

    {
        label: 'Categories',
        type: 'label',
    },
    {
        name: 'MainCategory',
        icon: 'favorite',

        children: [
            {
                name: 'MainCategory List',
                path: '/admin/maincategoryList',
                iconText: 'A',
            },
            {
                name: 'Add MainCategory',
                path: '/admin/add_maincategory',
                iconText: 'B',
            },
        ],
    },

    {
        name: 'SubCategory',
        icon: 'trending_up',

        children: [
            {
                name: 'SubCategory List',
                path: '/admin/subcategoryList',
                iconText: 'A',
            },
            {
                name: 'Add SubCategory',
                path: '/admin/add_subcategory',
                iconText: 'B',
            },
        ],
    },
    {
        name: 'Charts',
        icon: 'trending_up',

        children: [
            {
                name: 'Echarts',
                path: '/charts/echarts',
                iconText: 'E',
            },
        ],
    },
    {
        name: 'Documentation',
        icon: 'launch',
        type: 'extLink',
        path: 'http://demos.ui-lib.com/matx-react-doc/',
    },
]

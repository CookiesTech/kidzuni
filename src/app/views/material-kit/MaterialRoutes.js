import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const TeacherForm = Loadable(lazy(() => import('../Teachers/forms/AppForm')))
const TeacherTable = Loadable(lazy(() => import('../Teachers/AppTable')))
const EditTeacher = Loadable(
    lazy(() => import('../Teachers/forms/EditTeacher'))
)
const SubjectForm = Loadable(lazy(() => import('../Subjects/forms/AppForm')))
const SubjectsTable = Loadable(lazy(() => import('../Subjects/AppTable')))
const EditSubject = Loadable(
    lazy(() => import('../Subjects/forms/EditSubject'))
)

const StandardForm = Loadable(lazy(() => import('../Standards/forms/AppForm')))
const StandardTable = Loadable(lazy(() => import('../Standards/AppTable')))
const MainCategoryForm = Loadable(lazy(() => import('../MainCategory/AppForm')))
const MainCategoryTable = Loadable(
    lazy(() => import('../MainCategory/AppTable'))
)
const SubCategoryForm = Loadable(lazy(() => import('../SubCategory/AppForm')))
const SubCategoryTable = Loadable(lazy(() => import('../SubCategory/AppTable')))

const QuestionTable = Loadable(lazy(() => import('../Questions/AppTable')))
const AppIcon = Loadable(lazy(() => import('./icons/AppIcon')))
const AppProgress = Loadable(lazy(() => import('./AppProgress')))
const AppMenu = Loadable(lazy(() => import('./menu/AppMenu')))
const AppCheckbox = Loadable(lazy(() => import('./checkbox/AppCheckbox')))
const AppSwitch = Loadable(lazy(() => import('./switch/AppSwitch')))
const AppRadio = Loadable(lazy(() => import('./radio/AppRadio')))
const AppSlider = Loadable(lazy(() => import('./slider/AppSlider')))
const AppDialog = Loadable(lazy(() => import('./dialog/AppDialog')))
const AppSnackbar = Loadable(lazy(() => import('./snackbar/AppSnackbar')))
const AppAutoComplete = Loadable(
    lazy(() => import('./auto-complete/AppAutoComplete'))
)
const AppExpansionPanel = Loadable(
    lazy(() => import('./expansion-panel/AppExpansionPanel'))
)

const materialRoutes = [
    {
        path: '/admin/add_teacher',
        element: <TeacherForm />,
    },
    {
        path: '/admin/teachersList',
        element: <TeacherTable />,
    },
    {
        path: '/admin/edit_teacher/:value',
        element: <EditTeacher />,
    },
    {
        path: '/admin/subjectsList',
        element: <SubjectsTable />,
    },
    {
        path: '/admin/add_subject',
        element: <SubjectForm />,
    },

    {
        path: '/admin/edit_subject/:value',
        element: <EditSubject />,
    },

    {
        path: '/admin/standardsList',
        element: <StandardTable />,
    },
    {
        path: '/admin/add_standard',
        element: <StandardForm />,
    },
    {
        path: '/admin/maincategoryList',
        element: <MainCategoryTable />,
    },
    {
        path: '/admin/add_maincategory',
        element: <MainCategoryForm />,
    },

    {
        path: '/admin/subcategoryList',
        element: <SubCategoryTable />,
    },
    {
        path: '/admin/add_subcategory',
        element: <SubCategoryForm />,
    },
    {
        path: '/admin/questions',
        element: <QuestionTable />,
    },
    {
        path: '/material/icons',
        element: <AppIcon />,
    },
    {
        path: '/material/progress',
        element: <AppProgress />,
    },
    {
        path: '/material/menu',
        element: <AppMenu />,
    },
    {
        path: '/material/checkbox',
        element: <AppCheckbox />,
    },
    {
        path: '/material/switch',
        element: <AppSwitch />,
    },
    {
        path: '/material/radio',
        element: <AppRadio />,
    },
    {
        path: '/material/slider',
        element: <AppSlider />,
    },
    {
        path: '/material/autocomplete',
        element: <AppAutoComplete />,
    },
    {
        path: '/material/expansion-panel',
        element: <AppExpansionPanel />,
    },
    {
        path: '/material/dialog',
        element: <AppDialog />,
    },
    {
        path: '/material/snackbar',
        element: <AppSnackbar />,
    },
]

export default materialRoutes

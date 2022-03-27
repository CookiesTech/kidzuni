import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AppTable = Loadable(lazy(() => import('./tables/AppTable')))
const AppForm = Loadable(lazy(() => import('./forms/AppForm')))
const AppButton = Loadable(lazy(() => import('./buttons/AppButton')))

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

const CountryForm = Loadable(lazy(() => import('../Countries/forms/AppForm')))
const CountriesTable = Loadable(lazy(() => import('../Countries/AppTable')))

const StandardForm = Loadable(lazy(() => import('../Standards/forms/AppForm')))
const StandardTable = Loadable(lazy(() => import('../Standards/AppTable')))
const MainCategoryForm = Loadable(lazy(() => import('../MainCategory/AppForm')))
const MainCategoryTable = Loadable(
    lazy(() => import('../MainCategory/AppTable'))
)
const SubCategoryForm = Loadable(lazy(() => import('../SubCategory/AppForm')))
const SubCategoryTable = Loadable(lazy(() => import('../SubCategory/AppTable')))

const PackageForm = Loadable(lazy(() => import('../PackageManager/AppForm')))
const PackageTable = Loadable(lazy(() => import('../PackageManager/AppTable')))

const QuestionTable = Loadable(lazy(() => import('../Questions/AppTable')))
//  dca9ff93a7e6e7f259b3d99470ec1020942bb26
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
        path: '/admin/add_package',
        element: <PackageForm />,
    },
    {
        path: '/admin/packagesList',
        element: <PackageTable />,
    },
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
        path: '/admin/countriesList',
        element: <CountriesTable />,
    },
    {
        path: '/admin/add_Country',
        element: <CountryForm />,
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

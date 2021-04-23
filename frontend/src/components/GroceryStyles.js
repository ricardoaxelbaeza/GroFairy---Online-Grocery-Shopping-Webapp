import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        maxHeight: '85vh',
        height: 'auto'
    },
    media: {
        height: '20vh',
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        justifyContent: 'space-between',
        marginBottom: '1vh'
    },
    navLinks: {
        color: 'black',
    },
}));
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        height: '65vh',
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
        display: 'flex',
        marginBottom: '1vh',
        justifyContent: 'space-between',
    },
}));
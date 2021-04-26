import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'red',
    fontFamily:'Sofia, sans-serif',
    textShadow:'4px 4px 4px black'
  },
  image: {
    marginLeft: '15px',
  },
}));

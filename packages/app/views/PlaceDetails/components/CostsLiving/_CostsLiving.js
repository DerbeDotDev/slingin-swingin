// MUI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import HomeWorkIcon from '@material-ui/icons/HomeWork'

const useStyles = makeStyles(theme => ({
  ratingItem: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(10)
    }
  }
}))

function CostsLiving() {
  const classes = useStyles()

  return (
    <>
      <Box mb={4}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <HomeWorkIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Living Costs</Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={1}>
        {[
          { name: 'Hotel' },
          { name: 'Airbnb' },
          { name: 'Apartment' },
          { name: 'Coworking' },
          { name: 'Coliving' }
        ].map((rating, index) => {
          return (
            <Grid key={index} item xs={12} sm={6}>
              <Box className={classes.ratingItem}>
                <Grid container justify="space-between" alignItems="center" spacing={1}>
                  <Grid item xs>
                    <Typography display="inline">{rating.name}</Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="subtitle1">
                      <Box display="inline">$</Box>
                      <Box fontWeight="bold" display="inline">
                        {Math.floor(Math.random() * 10)}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default CostsLiving

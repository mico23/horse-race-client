import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { fetchSingleHorse } from '../../redux/actions/horseAction';
import { fetchSingleSupplier } from '../../redux/actions/supplierAction';

import { 
    Grid,
    Typography, 
    List, ListItem, ListItemText, 
    Card, CardContent
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    listRoot: {
        width: '100%',
        maxWidth: 360,
        minWidth: 260,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 330,
    },
  });



export class ManageSuppliers extends Component {

    handleListItemClick = (supplierID) => {
        this.props.fetchSingleSupplier(supplierID);
    }
    
    renderSupplierInfo(supplier) {
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Supplier Name
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {supplier.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Supplier ID
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {supplier.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone number
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {supplier.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {supplier.type}
          </Typography>
        </CardContent>
      )
    }

    // ** this is not displayed properly. I will fix it later.
    displayDefaultMessage() {
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Please select a supplier.
          </Typography>
        </CardContent>
      )
    }

    render() {
      const {classes, suppliers, supplier, curSupplierID} = this.props;
    //   const [selectedIndex, setSelectedIndex] = React.useState(1);

        return (
            <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Suppliers
              </Typography>
              
              <List className={classes.listRoot}>
                {suppliers.map((value) => {
                  const labelId = `checkbox-list-label-${value.id}`;
                  return (
                    <ListItem 
                      key={value.id} 
                      role={undefined} 
                      button
                      onClick={() => this.handleListItemClick(value.id)}>
                      <ListItemText 
                      id={labelId} 
                      primary={
                        `${value.nickname != null ? value.nickname : 'No Name'} - 
                        ID: ${value.id}`
                      }/>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
             
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Supplier Info
              </Typography>

              <Card className={classes.listRoot} variant="outlined">
                {
                  curSupplierID != 0 ? this.renderSupplierInfo(supplier) : this.displayDefaultMessage()
                }
              </Card>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    suppliers: state.supplierInfo.suppliers,
    supplier: state.supplierInfo,
    curSupplierID: state.supplierInfo.id
})

const mapActionsToProps = {
    fetchSingleSupplier
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ManageSuppliers));
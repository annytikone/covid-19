import React from "react"
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



class WorldTable extends React.Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }
    state = {
        stats: [],
        loading: false
    }

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTable: {
                root: {
                    backgroundColor: "#FF000"
                },
                paper: {
                    boxShadow: "none"
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "white"
                }
            }
        }
    })

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://corona.lmao.ninja/v2/countries?yesterday=true&sort=cases&allowNull=true') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ stats: res, loading: false }, () => console.log(res))
            })
            .catch(error => {
                console.log(error)
            })
    }





    render() {
        return (
            <React.Fragment>
                <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <br />

                    <MuiThemeProvider theme={this.getMuiTheme()}>
                        <MUIDataTable
                            title={<h1 style={{ float: 'left', color: '#3f51b5', }}>World Wide Corona Stats</h1>}
                            isLoading={this.state.loading}
                            columns={[
                                {
                                    name: "country",
                                    label: "Country",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                                {
                                    name: "cases",
                                    label: "Total Cases",
                                    options: {
                                        filter: true,
                                        sort: true,
                                    }
                                },
                                {
                                    name: "todayCases",
                                    label: "Current Cases",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                                {
                                    name: "deaths",
                                    label: "Total Deaths",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                                {
                                    name: "todayDeaths",
                                    label: "Current Deaths",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                                {
                                    name: "recovered",
                                    label: "Recovered Patients",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                                {
                                    name: "active",
                                    label: "Active",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                                {
                                    name: "critical",
                                    label: "Critical Patients",
                                    options: {
                                        filter: true,
                                        sort: false,
                                    }
                                },
                            ]}

                            data={this.state.stats}

                            options={{
                                filter: true,

                                rowHover: true,
                                downloadOptions: { filename: 'CovidData.csv', separator: ',' },
                                //onRowClick:(selectedRow,otherprops)=>{console.log(selectedRow)}, 
                                filterType: 'dropdown',
                                selectableRows: false,
                                responsive: 'stacked',
                            }} />
                    </MuiThemeProvider>
                </div>
            </React.Fragment>
        )
    }
}

export default WorldTable;

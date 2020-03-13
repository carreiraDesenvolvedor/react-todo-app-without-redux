import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props =>
{

    const keyHandler = (e) => {

        if(e.key == 'Enter'){

            e.shiftKey ? props.handleSearch() : props.handleAdd()

        }else if(e.key == 'Escape'){

            props.handleClear()

        }

    }

    return(
        <div role={"form"} className={"todoForm"}>

            <Grid cols='12 9 10' >

                <div className={"col-xs-12 col-sm-9 col-md-10"}>
                    <input
                        id={"description"}
                        placeholder={"Adicione sua tarefa"}
                        className={"form-control"}
                        value={props.description}
                        onKeyUp={keyHandler}
                        onChange={props.handleChange}
                    />
                </div>

            </Grid>


            <Grid cols='12 3 2'>

                <IconButton
                    onClick={props.handleAdd}
                    hide={false}
                    style={"primary"}
                    icon={"plus"} />

                <IconButton
                    onClick={props.handleSearch}
                    hide={false}
                    style={"info"}
                    icon={"search"}
                />

                <IconButton
                    onClick={props.handleClear}
                    hide={false}
                    style={"default"}
                    icon={"close"}
                />



            </Grid>
        </div>
    )

}
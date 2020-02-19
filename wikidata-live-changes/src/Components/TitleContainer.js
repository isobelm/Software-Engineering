import React from 'react'


class TitleContainer extends React.Component {
    constructor(props) {
        super()
        /*
        state = {
            title
            subtitle
        }

        */
        this.state = props
    }
    render() {
        return(
                <div class="col-md-5 text-left">
                     <h1 class="text-left  display-3"><b>{this.state.title}</b></h1>
                     <h4>{this.state.subtitle}</h4  >
                  </div>
        )
    }
}

export default TitleContainer
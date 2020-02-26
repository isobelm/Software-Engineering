import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class Feed extends React.Component {
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
                <h3 class = "text-blue">Most Recent Activity</h3>
                     <ul class="list-group">
                        <li class="list-group-item list-group-item">
                        
                        User 1 (created 5 mins ago) edited TCD page 10 seconds ago

                        username time item 

                        </li>
                        
                     </ul>
        )
    }
}

export default TitleContainer
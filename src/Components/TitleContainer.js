import React from 'react'


class TitleContainer extends React.Component {
    render() {
        return(
                <div className=" text-left">
                     <h1 className="text-left  display-3"><b>{this.props.title}</b></h1>
                     <h4>{this.props.subtitle}</h4  >
                  </div>
        )
    }
}

export default TitleContainer

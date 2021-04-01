import React from 'react'

class FunctionClick extends React.Component {
    state = {
        users: [{ id: 1, name: "Prabhat", class: "A" },
        { id: 2, name: "Prabhat", class: "B" }
        ]
    }
    render() {
        const newusers = this.state.users.map((user,key) => {
            return (<h1 key={user.id}>{user.id} {user.name} {user.class}</h1>

            )
        });
        return (
           <div>

          {newusers}
           </div>
        );
    }
}


export default FunctionClick;

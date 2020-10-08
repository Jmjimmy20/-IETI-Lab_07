module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    taskList=[
        {
            description: " comprar un gato", 
            name: "Jimmy", 
            status: "Ready",
            dueDate: "01-10-2020"
        
        },
        {
            description: "Protect the Horde", 
            name: "Jimmy", 
            status: "Ready",
            dueDate: "01-10-2020"
        
        }]


    const task = req.body;
    // Implement the response
    const responseMessage = { response: {taskList}};

    context.res = {
        status: 201,
        body: responseMessage
    };
}
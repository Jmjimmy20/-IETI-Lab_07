module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response
    const responseMessage = { response: {
                                    description: task.description, 
                                    name: task.name, 
                                    status: task.status,
                                    dueDate: task.dueDate
                                }
                            };
    

    context.res = {
        status: 201,
        body: responseMessage
    };
}
const validadeFieldTitle = (request, response, next) => {
  const {body} = request;

  if (body.title === undefined) {
    return response.status(400).json({message:'The field title is required'});
  }
  if (body.title === '') {
    return response.status(400).json({message:'The field title can not be empity'});
  }

  next();
};


const validadeFieldStatus = (request, response, next) => {
  const {body} = request;

  if (body.status === undefined) {
    return response.status(400).json({message:'The field status is required'});
  }
  if (body.status === '') {
    return response.status(400).json({message:'The field status can not be empity'});
  }

  next();
};



module.exports = {
  validadeFieldTitle,
  validadeFieldStatus
};
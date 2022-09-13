import * as promotionService from './promotion.service.js'

export const getAll = async (req, res) => {
    const promotions = await promotionService.getAll();
    res.status(200).send(promotions)
}

export const updateData = async (req, res) => {
    const {data} = req.body
    console.log(data)
    // console.log(data)
    const updateResult = await promotionService.updateData(data);
    if (updateResult.affectedRows === 0) {
        res.status(400).send({
          status: 'error',
          message: 'promotion not found',
        });
        return;
      }
  
      res.status(200).send({
        status: 'success',
      });
} 

export const createData = async (req, res) => {
  const {data} = req.body
  // console.log(data)
  await promotionService.createData(data);

    res.status(200).send({
      status: 'success',
    });
} 

export const deleteData = async (req, res) => {
  const {data} = req.body
  // console.log(data)
  for(let i = 0; i < data.length; i+=1) {
    let id = data[i]
    const deleteResult = await promotionService.deleteData(id);
  if (deleteResult.affectedRows === 0) {
      res.status(400).send({
        status: 'error',
        message: 'promotion not found',
      });
      return;
    }
  }
  

    res.status(200).send({
      status: 'success',
    });
} 
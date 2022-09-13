import * as companyService from './company.service.js'

export const getAll = async (req, res) => {
    const companies = await companyService.getAll();
    res.status(200).send(companies)
}

export const updateData = async (req, res) => {
    const {data} = req.body
    // console.log(data)
    const updateResult = await companyService.updateData(data);
    if (updateResult.affectedRows === 0) {
        res.status(400).send({
          status: 'error',
          message: 'company not found',
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
  await companyService.createData(data);

    res.status(200).send({
      status: 'success',
    });
} 

export const deleteData = async (req, res) => {
  const {data} = req.body
  // console.log(data)
  // const editedCompany = req.body
  for(let i = 0; i < data.length; i+=1) {
    let id = data[i]
    const deleteResult = await companyService.deleteData(id);
  if (deleteResult.affectedRows === 0) {
      res.status(400).send({
        status: 'error',
        message: 'company not found',
      });
      return;
    }
  }
  

    res.status(200).send({
      status: 'success',
    });
} 
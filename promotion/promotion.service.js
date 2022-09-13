import pool from "../database.js";
//read data
export const getAll = async () => {
    const sql = `SELECT * FROM vPromotion`
    const [promotions] = await pool.query(sql)
    return promotions
}
// approve promotion
export const getAllVisible = async () => {
    const sql = `SELECT * FROM promotions WHERE isVisible = 1`
    const [promotions] = await pool.query(sql)
    return promotions
}
//  non-approve promotion
export const getAllInVisible = async () => {
    const sql = `SELECT * FROM promotions WHERE isVisible = 0`
    const [promotions] = await pool.query(sql)
    return promotions
}
//update data
export const updateData = async (data) => {
    const {topic, detail, startDate, endDate, promotionId, nameEN} = data

    //find companyId from table companies
    const sql1 = `SELECT companyId FROM companies WHERE nameEN = ?`   
    const [checkId] = await pool.query(sql1,nameEN)
    const companyId = checkId[0].companyId
    
    const sql = `UPDATE promotions SET companyId = ?, topic = ?, detail = ?, startDate = ?, endDate = ? WHERE promotionId = ? LIMIT 1`
    const [updateResult] = await pool.query(sql,[companyId, topic, detail, startDate, endDate, promotionId])
    return updateResult
}

export const createData = async (data) => {
    const {topic, detail, startDate, endDate, nameEN} = data
    console.log(data)

    //find companyId from table companies
    const sql1 = `SELECT companyId FROM companies WHERE nameEN = ?`   
    const [checkId] = await pool.query(sql1,nameEN)
    const companyId = checkId[0].companyId

    const sql = `INSERT INTO promotions SET companyId = ? ,topic = ?, detail = ?, startDate = ?, endDate = ?`
    const [insertResult] = await pool.query(sql,[companyId, topic, detail, startDate, endDate])
    return insertResult //เหมือนจะไม่ใช้
}

export const deleteData = async (id) => {
    // edit later
    const sql = `UPDATE companies SET isVisible = 0 WHERE companyId = ? LIMIT 1`
    const [deleteResult] = await pool.query(sql,id)
    // console.log(deleteResult)
    return deleteResult
}


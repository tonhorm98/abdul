import pool from "../database.js";

export const getAll = async () => {
    const sql = `SELECT * FROM companies WHERE isActive = 1`
    const [companies] = await pool.query(sql)
    return companies
}

export const updateData = async (data) => {
    // edit later
    const {nameTH, nameEN, detail, taxId, companyId} = data
    const sql = `UPDATE companies SET nameTH = ?, nameEN = ?, detail = ?, taxId = ? WHERE companyId = ? LIMIT 1`
    const [updateResult] = await pool.query(sql,[nameTH, nameEN, detail, taxId, companyId])
    return updateResult
}

export const createData = async (data) => {
    // edit later
    const {nameTH, nameEN, detail, taxId} = data
    const sql = `INSERT INTO companies SET nameTH = ?, nameEN = ?, detail = ?, taxId = ?`
    const [insertResult] = await pool.query(sql,[nameTH, nameEN, detail, taxId])
    return insertResult //เหมือนจะไม่ใช้
}

export const deleteData = async (id) => {
    // edit later
    const sql = `UPDATE companies SET isActive = 0 WHERE companyId = ? LIMIT 1`
    const [deleteResult] = await pool.query(sql,id)
    // console.log(deleteResult)
    return deleteResult
}


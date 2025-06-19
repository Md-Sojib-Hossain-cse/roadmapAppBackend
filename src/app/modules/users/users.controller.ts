import { Request, Response } from 'express';
import { UserServices } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = await UserServices.createUserIntoDB(user);

    //send response
    res.status(200).send({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    // res.status(400).send({
    //   success: true,
    //   message: 'User Created Successfully',
    //   data: [],
    // });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await UserServices.getUserFromDB(id);

    //send response
    res.status(200).send({
      success: true,
      message: 'User Data Retrieve Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    // res.status(400).send({
    //   success: true,
    //   message: 'User Created Successfully',
    //   data: [],
    // });
  }
};

export const UserController = {
  createUser,
  getUser,
};

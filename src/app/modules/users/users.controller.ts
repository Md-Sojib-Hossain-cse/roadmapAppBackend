import { Request, Response } from 'express';
import { UserServices } from './users.service';
import userValidationSchema from './users.validations';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    //data validating using zod

    const zodParsedData = userValidationSchema.parse(user);

    const result = await UserServices.createUserIntoDB(zodParsedData);

    //send response
    res.status(200).send({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: true,
      message: 'Something went wrong!',
      error,
    });
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
    res.status(400).send({
      success: true,
      message: 'Something went wrong!',
      error,
    });
  }
};

export const UserController = {
  createUser,
  getUser,
};

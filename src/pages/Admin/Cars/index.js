import { useEffect, useMemo, useState } from 'react'
import { Popconfirm, Table } from 'antd'
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, fetchCars } from '@/store/CarSlice/carSlice';
import ProtectedAdmin from '../ProtectedAdmin';
import { ToastContainer, toast } from 'react-toastify';
function AdminCars() {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteCar(id));
      toast.success('Car deleted');
      setTimeout(() => {
        dispatch(fetchCars());
      }, 2000)
    } catch (error) {
      toast.error('Car could not be deleted!!!');
    }
  };



  const columns = useMemo(() => {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'pricePerDay',
        key: 'pricePerDay',
      },
      {
        title: 'Fuel',
        dataIndex: 'fuelType',
        key: 'fuelType',
      },
      {
        title: 'Transmission',
        dataIndex: 'transmissionType',
        key: 'transmissionType',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <>
            <Link href={`/Admin/Cars/EditCar/${record.id}`} >
              <Button variant='contained' color="success" >Edit</Button>
            </Link>
            <Popconfirm onConfirm={() => { handleDelete(record.id) }} title='Ae you sure?' okText='Yes' cancelText='No' placement='left'>
              <Button sx={{ marginLeft: '5px' }} variant='contained' color="error" >Delete</Button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [])


  return (
    <Stack>
      <ProtectedAdmin></ProtectedAdmin>
      <ToastContainer position="top-center" />
      {cars && (
        <Stack p={5}>
          <Box display={'flex'} justifyContent={'space-between'}  >
            <Typography variant='h4'>Cars</Typography>
            <Link href={'/Admin/Cars/AddCar'} >
              <Button variant='contained' key={'add-car'}>Add Car</Button>
            </Link>
          </Box>

          <Table dataSource={cars} columns={columns} rowKey={'id'} />
        </Stack>
      )}
    </Stack>
  )
}

export default AdminCars
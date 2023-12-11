import { useEffect, useMemo } from 'react'
import { Popconfirm, Table } from 'antd'
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '@/store/CarSlice/carSlice';
import ProtectedAdmin from '../ProtectedAdmin';
function AdminCars() {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCars());
  }, []);





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
            <Link href={'/'} >
              <Button variant='contained' color="success" >Edit</Button>
            </Link>
            <Popconfirm title='Ae you sure?' okText='Yes' cancelText='No' placement='left'>
              <Button sx={{marginLeft:'5px'}} variant='contained' color="error" >Delete</Button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [])


  return (
    <Stack>
      <ProtectedAdmin></ProtectedAdmin>
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
import { useEffect, useMemo, useState } from 'react'
import { Popconfirm, Table } from 'antd'
import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, fetchCars } from '@/store/CarSlice/carSlice';
import ProtectedAdmin from '../ProtectedAdmin';
import { ToastContainer, toast } from 'react-toastify';
import { fetchReservations } from '@/store/ReservationsSlice/reservationsSlice';


function AdminReserv() {
  const { reservations } = useSelector((state) => state.reservations);
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchReservations());
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
        title: 'User Id',
        dataIndex: 'userId',
        key: 'userId',
      },
      {
        title: 'Car Id',
        dataIndex: 'carId',
        key: 'carId',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
      },
      {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <>
            <Popconfirm onConfirm={() => { handleDelete(record.id) }} title='Do you want to remove the reservation?' okText='Yes' cancelText='No' placement='left'>
              <Button sx={{ marginLeft: '5px' }} variant='contained' color="error" >Completed</Button>
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
      {reservations && (
        <Stack p={5}>
          <Box >
            <Typography variant='h4'>Reservations</Typography>
          </Box>

          <Table dataSource={reservations} columns={columns} rowKey={'id'} />
        </Stack>
      )}
    </Stack>
  )
}

export default AdminReserv
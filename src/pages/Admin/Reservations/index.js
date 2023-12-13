import { useEffect, useMemo, useState } from 'react'
import { Popconfirm, Table } from 'antd'
import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedAdmin from '../ProtectedAdmin';
import { ToastContainer, toast } from 'react-toastify';
import { deleteReservation, fetchReservations } from '@/store/ReservationsSlice/reservationsSlice';


function AdminReserv() {
  const { reservations } = useSelector((state) => state.reservations);
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteReservation(id));
      toast.success('Reservation completed');
      setTimeout(() => {
        dispatch(fetchReservations());
      }, 2000)
    } catch (error) {
      toast.error('Reservation could not be completed!!!');
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
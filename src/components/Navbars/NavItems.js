import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CustomButton } from '../UI'

const routes = [
  {
    label: 'Records',
    path: '/app/records/patients',
  },
  {
    label: 'Doctors',
    path: '/app/doctors',
  },
  {
    label: 'Nurse',
    path: '/app/nurse',
  },
  {
    label: 'Pharmacy',
    path: '/app/pharmacy',
  },
  {
    label: 'Laboratories',
    path: '/app/lab',
  },
  {
    label: 'Accounts',
    path: '/app/accounts',
  },
  {
    label: 'Reports',
    path: '/app/reports',
  },
]

function NavItems() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
      {/* <Link to='/app/records'>Records</Link>   */}
      {routes.map((i) => {
        let isActive = location.pathname.includes(i.path)
        return (
          <CustomButton
            onClick={() => navigate(i.path)}
            className={`mx-1 ${isActive ? 'btn-warning' : ''}`}
          >
            {i.label}
          </CustomButton>
        )
      })}
    </>
  )
}

export default NavItems

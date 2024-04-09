import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
const ConvertTable = ({ConvertTableEntries,editArray,filterArray}) => {
    console.log('UpdatedData','Rendered again',ConvertTableEntries);
  return (
     <div>
        <Table className='mt-7 rounded-xl border border-[#DDDDDD] w-11/12'>

            <Thead>
                <Tr className='flex gap-x-10 rounded-t-md border-b border-[#DDDDDD] px-7 py-2'>
                    <Th className='w-[20%] text-left text-lg font-medium uppercase text-richblack-600 border-none'>
                        Amount
                    </Th>
                    <Th className='w-[20%] text-left text-lg font-medium uppercase text-richblack-600 border-none'>
                        From
                    </Th>
                    <Th className='w-[20%] text-left text-lg font-medium uppercase text-richblack-600 border-none'>
                        To
                    </Th>
                     <Th className=' w-[20%] text-left text-lg font-medium uppercase text-richblack-600 border-none'>
                        CurrentRate
                    </Th>
                    <Th className='w-[20%] text-left text-lg font-medium uppercase text-richblack-600 border-none'>
                        Actions
                    </Th>
                </Tr>
            </Thead>

            <Tbody>
                {
                    ConvertTableEntries?.length===0?(
                        <Tr>
                            <Td className='py-10 tex-center text-2xl font-medium text-richblack-100'>
                                No currencies found
                            </Td>
                        </Tr>
                    )
                    :(
                        ConvertTableEntries?.map((entry,index)=>(
                            <Tr key={index} className='flex gap-x-10 border-b border-b-richblack-25 px-6 py-8'>
                                <Td className='text-lg font-medium text-richblack-600 w-[20%] border-none'>
                                    {entry?.amount}
                                </Td>
                                <Td className='text-lg font-medium text-richblack-600 w-[20%] border-none'>
                                    {entry?.from}
                                </Td>
                                <Td className='text-lg font-medium text-richblack-600 w-[20%] border-none'>
                                    {entry?.to}
                                </Td>
                                <Td className='text-lg font-medium text-richblack-600 w-[20%] border-none'>
                                    {entry?.currentRate}
                                </Td>
                                 <Td className='text-lg font-medium text-richblack-600 w-[20%] border-none flex flex-row gap-5'>
                                    <button onClick={(e)=>editArray(e,entry,index)}>
                                        <FiEdit2 size={20} />
                                    </button>
                                    <button onClick={(e)=>filterArray(e,entry,index)}>
                                        <RiDeleteBin6Line size={20}/>
                                    </button>
                                </Td>
                            </Tr>
                        ))
                    )
                }
            </Tbody>
        </Table>
      </div>
  )
}

export default ConvertTable
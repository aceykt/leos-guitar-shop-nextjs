import { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useMobxStores } from '../data/stores'

const Account: NextPage = () => {
    const { userLoginStore } = useMobxStores()
    const router = useRouter()

    useEffect(() => {
        if (!userLoginStore.loggedIn) router.push("/login")
    });

    const logout = () => {
        userLoginStore.logout()
        router.push("/")
    }

    return <>
        <Head>
            <title>My Account - Leo's Guitar Shop</title>
        </Head>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col'>
                    <table className='table table-dark'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{userLoginStore.firstName} {userLoginStore.lastName}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userLoginStore.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-warning float-end' onClick={() => logout()}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Account

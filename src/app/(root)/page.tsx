import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { Button } from '@codingmonsters/ui-myrae';

const Home = () => {
  const loggedIn = { firstName: 'Ardian' };

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Hello'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transaction efficiently.'
          />
         <Button
  bgColorBtn="black"
  btnRadius="rounded-full"
  childrenBtn="Contact Us"
/>
        </header>

      </div>
    </section>
  )
}

export default Home
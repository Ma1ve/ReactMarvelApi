
// import {lazy, Suspense} from 'react'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Helmet} from 'react-helmet'
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

// const SingleComicPage = lazy(() => import("../pages/SingleComicPage"))

const ComicsPage = () => {
  
  return (
    <>

      <Helmet>
        <meta
          name="description"
          content="Page width list of our comics"
        />
        <title>Comics page</title>
      </Helmet>
      <AppBanner/>

      {/* <Routes>
        <Rout>
            <Route path=":id" element={<SingleComicPage/>}/>
            <Route path="/" element={<ComicsList/>}/>
        </Rout>
      </Routes> */}

      <ComicsList/>
    </> 
  )
   
}

export default ComicsPage
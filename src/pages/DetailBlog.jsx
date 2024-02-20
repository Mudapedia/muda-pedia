import React, { useEffect, useState } from "react"
import NavigationBar from "../components/user/Navbar"
import Footer from "../components/user/Footer"
import { useParams } from "react-router-dom"
import { Link, Button, Image, Skeleton } from "@nextui-org/react"
import { } from "@nextui-org/react"
import "./DetailBlog.css"
import dateformat from "dateformat"
import { ArrowGreyRight } from "../assets/icons/Icons"
import Content from "../api/content"
import SimpleCrypto from "simple-crypto-js"

const DetailBlog = () => {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)
  const [article, setArticle] = useState(params.get('article'))

  const [title, setTitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")

  const [dataMap, setDataMap] = useState([])

  useEffect(() => {
    if (article) {
      setArticle(params.get('article'))
    } else {
      setArticle(params.get('article'))
    }
  }, [window.location.search])

  const getData = async () => {
    const key = "wokwok"
    const simple = new SimpleCrypto(key)
    const decryptId = simple.decrypt(article)
    console.log(article)

    try {
      const datas = await Content.getByID(decryptId)
      setDate(datas.data.created_at)
      setDataMap([datas.data])
    } catch (error) {
      console.log(error)
    }
  }

  const LocalDate = dateformat(date, "d mmmm yyyy")
  const setHTML = (content) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
  }

  useEffect(() => {
    getData()
  }, [article])

  return (
    <>
      <div className="max-w-screen-lg mx-auto mt-9 lg:px-0 px-6">
        <Link href="/blog">
          <div className="flex mb-7 gap-2 items-center">
            <div className="rotate-180">
              <ArrowGreyRight width={15} height={15} />
            </div>
            <p className="text-[#66676A]">Back</p>
          </div>
        </Link>
      </div>
      {dataMap.length > 0 ? (
        dataMap.map((item, index) => {
          return (
            <section className="max-w-screen-lg mx-auto mb-9 px-6 lg:px-0">
              <h1 className="text-[#091232] text-2xl font-medium m-0">{item.title}</h1>
              <p className="text-[#66676A] pt-1 pb-3">{LocalDate}</p>
              <div
                className="w-full min-h-96 rounded-xl"
                style={{
                  backgroundImage: `url(${item.thumbnail})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="Blog">{setHTML(item.description)}</div>
            </section>
          )
        })
      ) : (
        <section className="max-w-screen-lg mx-auto mb-9 px-6 lg:px-0 flex flex-col gap-5">
          <Skeleton className="w-1/2 h-4 rounded-md" />
          <Skeleton className="w-1/6 h-4 rounded-md" />
          <Skeleton className="w-full h-96 rounded-md" />
          <div className="flex flex-col gap-3">
            <Skeleton className="ms-16 h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="ms-16 h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
            <Skeleton className="w-full h-2 rounded-md" />
          </div>
        </section>
      )}
      <Footer />
    </>
  )
}

export default DetailBlog

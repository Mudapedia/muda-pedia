import image from "../../../assets/5395108.jpg"

const AboutUs = () => {
    return(
        <section className="text-slate-50 grid place-items-center px-6 py-4 md:px-9 lg:px-16 xl:px-28 bg-slate-900 gap-8">
            <h1 className="text-4xl mb-3 bg-gradient-to-br from-blue-600 to-purple-700 bg-clip-text text-transparent font-extrabold">WHO ARE WE?</h1>
            <img src={ image } alt="images" className="rounded-full w-3/6 sm:w-1/6" />
            <p className="max-w-screen-md"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet magni repudiandae dicta veritatis neque deserunt quia totam alias hic similique voluptas voluptatem voluptates esse quas inventore doloremque velit eaque culpa sapiente, consequatur fugit ipsam. Laboriosam amet quia consectetur rem, quo perferendis sint quasi. Asperiores animi sint nobis ipsam iure.</p>
        </section>
    )
}
export default AboutUs
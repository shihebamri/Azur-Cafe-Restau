export function Gallery() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-4">
          <img src="https://i.postimg.cc/bJD5MkQn/g1.jpg" alt="Gallery Image 1" className="w-full" />
          <img src="https://i.postimg.cc/SQcTMyVm/g2.jpg" alt="Gallery Image 2" className="w-full" />
          <img src="https://i.postimg.cc/mk3mfwhP/g4.jpg" alt="Gallery Image 3" className="w-full" />
          <img src="https://i.postimg.cc/PJnSRcfG/g5.jpg" alt="Gallery Image 4" className="w-full" />
        </div>
      </div>
    </section>
  )
}

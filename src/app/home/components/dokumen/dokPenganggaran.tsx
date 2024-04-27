"use client";
import { useEffect, useState } from "react";
import PDFViewerDownload from "../pdf/pdfViewDownload";


interface Ipost {
  id: number;
  tanggal: string;
  judul: string;
  dokumen: string;
  file: string;
  url: string;
}

const DokPenganggaran = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Use the useEffect hook to fetch data when the component mounts

  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=kua",
  //         {
  //           cache: "no-store",
  //         }
  //       );
  //       // Replace with your API route
  //       if (response.ok) {
  //         const data = await response.json();
  //         setData(data);
  //       } else {
  //         console.error("Failed to fetch data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call the fetchData function
  // }, []);
  const [resultlra, setResultlra] = useState([]);
  const [resultlopini, setResultopini] = useState([]);
  const [resultlkpd, setResultlkpd] = useState([]);
  const [resultapbd, setResultapbd] = useState([]);
  const [resultkua, setResultkua] = useState([]);
  const [resultppas, setResultpas] = useState([]);
  const [resultnota, setResultnota] = useState([]);
  const [resultdpa, setResultdpa] = useState([]);
  const [resultdppa, setResultdppa] = useState([]);
  const [resultrka, setResultrka] = useState([]);
  const [resultskpd, setResultskpd] = useState([]);
  const [resultppkd, setResultppkd] = useState([]);
  const [resultberitaacara, setResultberitaacara] = useState([]);
  const [resultperwako, setResultperwako] = useState([]);
  const [resultraperda, setResultraperda] = useState([]);
  const [resultlak, setResultlak] = useState([]);
  
  const getDataOpini = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=opini`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultopini(data);
      });
  }

	const getDataLak = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=lak`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultlak(data);
      });
  }

  const getDataRaperda = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=raperda`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultraperda(data);
      });
  }

  const getDataLkpd = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=lkpd`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultlkpd(data);
      });
  }

  const getDataLra = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=lra`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultlra(data);
      });
  }

  const getDataApbd = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=apbd`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultapbd(data);
      });
  }

  const getDataKua = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=kua`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultkua(data);
      });
  }

  const getDataPpas = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=ppas`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultpas(data);
      });
  }

  const getDataNotakeuangan = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=notakeuangan`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultnota(data);
      });
  }

  const getDataDpa = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=dpa`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultdpa(data);
      });
  }

	const getDataDppa = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=dppa`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultdppa(data);
      });
  }

  const getDataRka = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=rka`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultrka(data);
      });
  }

  const getDataBeritaAcara = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=beritaacara`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultberitaacara(data);
      });
  }

  const getDataPerwako = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=perwako`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultperwako(data);
      });
  }

  const getDataSkpd = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=skpd`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultskpd(data);
      });
  }

  const getDataPpkd = () => {
    fetch(`https://lab.dima-dan-rendy.shop/dokanggaran?dokumen=ppkd`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultppkd(data);
      });
  }

  useEffect(() => {
    getDataApbd();
    getDataKua();
    getDataPpas();
    getDataNotakeuangan();
    getDataDpa();
	getDataDppa();
    getDataRka();
    getDataBeritaAcara();
    getDataPerwako();
    getDataLra();
    getDataLkpd();
    getDataOpini();
	getDataPpkd();
	getDataSkpd();
	getDataRaperda();
	getDataLak();
  }, []);

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Dokumen Penganggaran
        </div>
        <div className="collapse-content">
          <div>
            <h2 className="font-bold">APBD</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultapbd.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">RAPERDA</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultraperda.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">KUA</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultkua.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">PPAS</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultppas.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Nota Keuangan</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultnota.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">DPA</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultdpa.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">DPPA</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultdppa.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">RKA</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultrka.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td> 
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Berita Acara Kesepakatan</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultberitaacara.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Perwako</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultperwako.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">LRA</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultlra.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">LAK</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultlak.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">LKPD</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultlkpd.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/*
          <div>
            <h2 className="font-bold">SKPD</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                 
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultskpd.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a> 
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          */}
          <div>
            <h2 className="font-bold">PPKD</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultppkd.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-bold">OPINI</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {resultlopini.map((post: Ipost, i) => (
                    <tr key={post.id}>
                      <th>{i + 1}</th>
                      <td>{post.judul}</td>
                      <td>{post.tanggal}</td>
                      <td>
                        <a className="btn btn-xs btn-outline btn-primary mr-2" target="_blank" href={`https://lab.dima-dan-rendy.shop/assets/dokanggaran/${post.file}`}>
                          Download
                        </a>
                        <PDFViewerDownload {...post} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DokPenganggaran;

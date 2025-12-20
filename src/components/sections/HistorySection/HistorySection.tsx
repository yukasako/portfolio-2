export default function HistorySection() {
  return (
    <>
      <article id='history' className='fade'>
        <h3 className='contentName'>History</h3>

        <div className='timeline'>
          <ul className='timeline-list'>
            <li className='timeline-list-item'>
              <div className='date'>
                2024 <br />
                -2025
              </div>

              <div className='content'>
                <p className='title'>Frontend Developer</p>

                <div className='companyAndLocation'>
                  <p className='company'>Triggerbee</p>
                  <p className='location'>Stockholm, Sweden</p>
                </div>

                <p className='jobDescription'>
                  Triggerbee is a SaaS platform that provides web customer
                  engagement and on-site marketing solutions. I joined them as a
                  front-end developer intern for six months, contributing to
                  UI/UX development.
                </p>

                <p className='jobDescription'>
                  Angular, TypeScript, Scss, Git, Figma, Agile, AzureDevOps,
                  Storybook.
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>
                2023 <br />
                -2025
              </div>

              <div className='contentStudent'>
                <p className='title'>Frontend Development Student</p>

                <div className='companyAndLocation'>
                  <p className='company'>Nackademin</p>
                  <p className='location'>Stockholm, Sweden</p>
                </div>

                <p className='jobDescription'>
                  JavaScript, HTML, CSS(SASS), Git, Accessibility, Figma, Agile,
                  CMS.
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>
                2020 <br />
                -2022
              </div>

              <div className='content'>
                <p className='title'>Marketing Associate / Japanese Market</p>

                <div className='companyAndLocation'>
                  <p className='company'>Triwa</p>
                  <p className='location'>Stockholm, Sweden</p>
                </div>

                <p className='jobDescription'>
                  Marketing for the Japanese market. <br />
                  Influencer marketing, social media communication, copy writing
                  for digital ads and newsletter communication for subscribers.
                  Content localization, product translation and updating
                  e-commerce website. Inventory control and customer service in
                  Japanese.
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>
                2018 <br />
                -2019
              </div>

              <div className='contentStudent'>
                <p className='title'>Student</p>

                <div className='companyAndLocation'>
                  <p className='company'>Stockholm University</p>
                  <p className='location'>Stockholm, Sweden</p>
                </div>

                <p className='jobDescription'>Svenska som främmande språk</p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>2017</div>

              <div className='content'>
                <p className='title'>Banquet Server</p>

                <div className='companyAndLocation'>
                  <p className='company'>Stadshusrestauranger</p>
                  <p className='location'>Stockholm, Sweden</p>
                </div>

                <p className='jobDescription'>
                  Serving the Nobel banquet 2018, 2019 and 2022.
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>2016</div>
              <div className='lifeEvent'>
                <p className='title'>Move to Stockholm</p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>
                2015 <br />
                -2016
              </div>

              <div className='content'>
                <p className='title'>Export Clerk</p>

                <div className='companyAndLocation'>
                  <p className='company'>Kintetsu World Express</p>
                  <p className='location'>Stockholm, Sweden</p>
                </div>

                <p className='jobDescription'>
                  Receiving shipping orders from clients and arrange the
                  shipments.
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>
                2013 <br />
                -2015
              </div>

              <div className='content'>
                <p className='title'>Assistant Store Manager</p>

                <div className='companyAndLocation'>
                  <p className='company'>UNIQLO</p>
                  <p className='location'>Tokyo, Japan</p>
                </div>

                <p className='jobDescription'>
                  Managing UNIQLO apparel stores in Tokyo after the 6 month UMC
                  (Uniqlo Management Candidate) program.
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>
                2008 <br />
                -2013
              </div>

              <div className='contentStudent'>
                <p className='title'>Student</p>

                <div className='companyAndLocation'>
                  <p className='company'>Rikkyo University</p>
                  <p className='location'>Tokyo, Japan</p>
                </div>

                <p className='jobDescription'>
                  Bachelor of Arts - BA, Contemporary Psychology
                </p>
              </div>
            </li>

            <li className='timeline-list-item'>
              <div className='date'>1989</div>
              <div className='lifeEvent'>
                <p className='title'>Born in Tokyo</p>
              </div>
            </li>
          </ul>

          <div className='more'>
            <button type='button'>Load more</button>
          </div>
        </div>
      </article>
    </>
  );
}

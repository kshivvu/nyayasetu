import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="min-h-screen bg-[#F4F1EB]">
        
        <section className="bg-[#1A2B4A] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-georgia">
              About NyayaSetu
            </h1>
            <p className="text-xl text-[#F5B942]">
              न्याय सबके लिए — Justice for All
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2B4A] mb-6 font-georgia">
              What is NyayaSetu?
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                NyayaSetu (न्याय + सेतु) means &quot;Bridge to Justice&quot; — an AI-powered legal aid platform
                designed for every Indian citizen. We believe that understanding your legal rights
                shouldn&apos;t require a law degree or expensive lawyer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every day, millions of Indians sign documents they cannot understand — rental agreements
                with hidden penalties, employment contracts with unfair bonds, RTI applications that
                get rejected due to technicalities, and terms &amp; conditions that waive fundamental rights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                NyayaSetu convenes an AI &quot;Sabha&quot; (council) of three expert personas who analyse your
                document simultaneously and return a structured verdict with flagged risks, plain-language
                explanations, and clear action steps — all in under 12 seconds, completely free.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4A] mb-12 font-georgia">
              The Three Voices of Your AI Sabha
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F4F1EB] rounded-xl p-8 border-l-4 border-[#E8762D]">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2 font-georgia">
                  वकील (Vakil)
                </h3>
                <p className="text-[#E8762D] font-medium mb-4">The Legal Expert</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Vakil is your sharp legal mind who reads every clause with a critical eye.
                  Trained on Indian law, Vakil identifies:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Risky or one-sided clauses
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Potentially illegal terms
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    What you can legally challenge
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Your rights under Indian law
                  </li>
                </ul>
              </div>

              {/* Aam Aadmi */}
              <div className="bg-[#F4F1EB] rounded-xl p-8 border-l-4 border-[#F5B942]">
                <div className="text-4xl mb-4">🧑‍🌾</div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2 font-georgia">
                  आम आदमी (Aam Aadmi)
                </h3>
                <p className="text-[#E8762D] font-medium mb-4">The Common Person</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Aam Aadmi is the friend who explains legal jargon in simple Hindi over chai.
                  No dictionary needed — just clear, everyday language:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Plain Hindi explanations (Devanagari)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    No legal terminology
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Class 10 student-level simplicity
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Relatable examples and analogies
                  </li>
                </ul>
              </div>

              {/* Nyayaadheesh */}
              <div className="bg-[#F4F1EB] rounded-xl p-8 border-l-4 border-[#1A2B4A]">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2 font-georgia">
                  न्यायाधीश (Nyayaadheesh)
                </h3>
                <p className="text-[#E8762D] font-medium mb-4">The Judge</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Nyayaadheesh is the wise judge who delivers the final verdict after
                  hearing all perspectives:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Overall risk score (1-10)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Top 3 immediate action items
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    Sign / Negotiate / Reject recommendation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E8762D] mr-2">•</span>
                    One-line summary in Hindi + English
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Unseen Feature Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1A2B4A] text-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🔍</span>
                <h2 className="text-3xl font-bold font-georgia">
                  The Unseen (देखा नहीं गया)
                </h2>
              </div>
              <p className="text-[#F4F1EB] leading-relaxed mb-4">
                This is what makes NyayaSetu truly powerful. While you&apos;re reading the document
                for what it says, our AI is also looking for what it <em>doesn&apos;t</em> say — the
                hidden traps, the unusual omissions, the clauses buried in fine print that most
                people miss entirely.
              </p>
              <p className="text-[#F5B942] leading-relaxed">
                &quot;The Unseen&quot; proactively flags risks you didn&apos;t even know to ask about —
                because sometimes the most dangerous thing in a contract is what&apos;s not there.
              </p>
            </div>
          </div>
        </section>

        {/* Target Users Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4A] mb-12 font-georgia">
              Who is NyayaSetu For?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* College Student */}
              <div className="bg-[#F4F1EB] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-bold text-[#1A2B4A] mb-2">College Students</h3>
                <p className="text-gray-700 text-sm">
                  Internship offer letters with bond clauses that lock you in for years
                </p>
              </div>

              {/* Tenant */}
              <div className="bg-[#F4F1EB] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-[#1A2B4A] mb-2">Tenants</h3>
                <p className="text-gray-700 text-sm">
                  Rent agreements with hidden penalties and unfair deposit terms
                </p>
              </div>

              {/* First-Jobber */}
              <div className="bg-[#F4F1EB] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-[#1A2B4A] mb-2">First-Jobbers</h3>
                <p className="text-gray-700 text-sm">
                  Employment contracts with NDA, non-compete, or IP waiver traps
                </p>
              </div>

              {/* Citizen */}
              <div className="bg-[#F4F1EB] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🇮🇳</div>
                <h3 className="text-lg font-bold text-[#1A2B4A] mb-2">Citizens</h3>
                <p className="text-gray-700 text-sm">
                  RTI applications, government notices, scheme eligibility documents
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Tagline Section */}
        <section className="py-12 px-4 bg-[#E8762D]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-white font-georgia">
              न्याय सबके लिए — Justice for All
            </p>
            <p className="text-white mt-4">
              Built for Open Innovation Hackathon 2025 · Greater Noida
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;

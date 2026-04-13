import React from 'react';
import Link from 'next/link';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="min-h-screen bg-[#F4F1EB]">
        {/* Hero Section */}
        <section className="bg-[#1A2B4A] text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-georgia">
              90% of Indians sign documents they don&apos;t understand.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#F5B942] font-medium">
              NyayaSetu fixes that.
            </p>
            <Link href="/app">
              <button className="bg-[#E8762D] hover:bg-[#d66520] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Analyse Your Document
              </button>
            </Link>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A2B4A] mb-12 font-georgia">
              Meet Your AI Sabha
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vakil Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#E8762D] hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2 font-georgia">
                  Vakil
                </h3>
                <p className="text-[#E8762D] font-medium mb-4">The Lawyer</p>
                <p className="text-gray-700 leading-relaxed">
                  Identifies risky clauses, illegal terms, and what you can legally challenge.
                  Your legal expert who spots the traps hidden in fine print.
                </p>
              </div>

              {/* Aam Aadmi Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#F5B942] hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">🧑‍🌾</div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2 font-georgia">
                  Aam Aadmi
                </h3>
                <p className="text-[#E8762D] font-medium mb-4">The Common Man</p>
                <p className="text-gray-700 leading-relaxed">
                  Explains every clause in simple Hindi — no jargon, no complex legal terms.
                  Like a friend breaking it down over chai.
                </p>
              </div>

              {/* Nyayaadheesh Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#1A2B4A] hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2 font-georgia">
                  Nyayaadheesh
                </h3>
                <p className="text-[#E8762D] font-medium mb-4">The Judge</p>
                <p className="text-gray-700 leading-relaxed">
                  Delivers the final verdict with a risk score (1-10) and clear action steps.
                  Your trusted guide to what comes next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1A2B4A] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold text-[#E8762D] mb-2">90%</div>
                <div className="text-lg text-[#F4F1EB]">Indians cannot understand legal documents</div>
              </div>
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold text-[#E8762D] mb-2">1.5 Cr+</div>
                <div className="text-lg text-[#F4F1EB]">Pending court cases due to uninformed decisions</div>
              </div>
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold text-[#E8762D] mb-2">₹0</div>
                <div className="text-lg text-[#F4F1EB]">Legal access for those who can&apos;t afford ₹2,000/hour lawyers</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-8 font-georgia">
              How NyayaSetu Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="bg-white rounded-lg shadow p-6 w-full md:w-1/4">
                <div className="text-3xl mb-2">📄</div>
                <div className="font-bold text-[#1A2B4A]">Paste or Speak</div>
                <div className="text-sm text-gray-600">Upload your document</div>
              </div>
              <div className="text-[#E8762D] text-2xl hidden md:block">→</div>
              <div className="bg-white rounded-lg shadow p-6 w-full md:w-1/4">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold text-[#1A2B4A]">AI Analysis</div>
                <div className="text-sm text-gray-600">3 personas review</div>
              </div>
              <div className="text-[#E8762D] text-2xl hidden md:block">→</div>
              <div className="bg-white rounded-lg shadow p-6 w-full md:w-1/4">
                <div className="text-3xl mb-2">📋</div>
                <div className="font-bold text-[#1A2B4A]">Get Verdict</div>
                <div className="text-sm text-gray-600">Risk score + actions</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

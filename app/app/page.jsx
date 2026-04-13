'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documentText: '',
      isAnalysing: false,
      analysisComplete: false,
      inputMode: 'paste' // 'paste' or 'voice'
    };
  }

  handleTextChange = (e) => {
    this.setState({ documentText: e.target.value });
  };

  handleAnalyse = () => {
    if (this.state.documentText.trim()) {
      this.setState({ isAnalysing: true });
      // Simulate API call - in production, this would call your backend
      setTimeout(() => {
        this.setState({ isAnalysing: false, analysisComplete: true });
      }, 3000);
    }
  };

  handleVoiceInput = () => {
    // Voice input would use Web Speech API here
    alert('Voice input feature - would activate Hindi Web Speech API');
  };

  render() {
    return (
      <div className="flex flex-col min-h-screen bg-[#F4F1EB]">
        <Navbar />
        <main className="flex-grow py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-[#1A2B4A] font-georgia mb-2">
                Analyse Your Document
              </h1>
              <p className="text-[#E8762D] text-lg">
                अपना दस्तावेज़ विश्लेषित करें
              </p>
            </div>

            {/* Input Mode Toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-lg shadow p-2 inline-flex">
                <button
                  onClick={() => this.setState({ inputMode: 'paste' })}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    this.state.inputMode === 'paste'
                      ? 'bg-[#E8762D] text-white'
                      : 'text-[#1A2B4A] hover:bg-gray-100'
                  }`}
                >
                  📄 Paste Text
                </button>
                <button
                  onClick={() => this.setState({ inputMode: 'voice' })}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    this.state.inputMode === 'voice'
                      ? 'bg-[#E8762D] text-white'
                      : 'text-[#1A2B4A] hover:bg-gray-100'
                  }`}
                >
                  🎤 Voice Input (हिंदी)
                </button>
              </div>
            </div>

            {/* Document Input */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              {this.state.inputMode === 'paste' ? (
                <textarea
                  value={this.state.documentText}
                  onChange={this.handleTextChange}
                  placeholder="Paste your legal document here (rent agreement, offer letter, T&C, RTI, government notice, etc.)"
                  className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-[#E8762D] focus:outline-none resize-none"
                />
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎤</div>
                  <p className="text-[#1A2B4A] text-lg mb-4">
                    Click the button below to speak your document in Hindi
                  </p>
                  <button
                    onClick={this.handleVoiceInput}
                    className="bg-[#E8762D] hover:bg-[#d66520] text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Start Speaking / बोलना शुरू करें
                  </button>
                </div>
              )}

              {/* Analyse Button */}
              {this.state.inputMode === 'paste' && (
                <button
                  onClick={this.handleAnalyse}
                  disabled={!this.state.documentText.trim() || this.state.isAnalysing}
                  className={`w-full mt-6 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ${
                    this.state.documentText.trim() && !this.state.isAnalysing
                      ? 'bg-[#E8762D] hover:bg-[#d66520] text-white transform hover:scale-105 shadow-lg'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {this.state.isAnalysing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analysing with AI Sabha...
                    </span>
                  ) : (
                    '⚖️ Get AI Analysis / विश्लेषण प्राप्त करें'
                  )}
                </button>
              )}
            </div>

            {/* Features Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <h3 className="font-bold text-[#1A2B4A]">Vakil Analysis</h3>
                <p className="text-sm text-gray-600">Legal risk identification</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-3xl mb-2">🧑‍🌾</div>
                <h3 className="font-bold text-[#1A2B4A]">Aam Aadmi Explanation</h3>
                <p className="text-sm text-gray-600">Simple Hindi translation</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-3xl mb-2">🏛️</div>
                <h3 className="font-bold text-[#1A2B4A]">Nyayaadheesh Verdict</h3>
                <p className="text-sm text-gray-600">Risk score + action items</p>
              </div>
            </div>

            {/* Sample Analysis Result (shown after analysis) */}
            {this.state.analysisComplete && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-[#1A2B4A] font-georgia">
                    Analysis Complete
                  </h2>
                  <p className="text-[#E8762D]">विश्लेषण पूर्ण हुआ</p>
                </div>

                {/* Risk Score */}
                <div className="bg-[#1A2B4A] text-white rounded-lg p-6 mb-6 text-center">
                  <div className="text-5xl font-bold text-[#E8762D] mb-2">7/10</div>
                  <div className="text-[#F5B942]">High Risk Document</div>
                  <p className="text-sm text-[#F4F1EB] mt-2">
                    ⚠️ Several concerning clauses detected
                  </p>
                </div>

                {/* Three Voices Output */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#F4F1EB] rounded-lg p-4 border-l-4 border-[#E8762D]">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">⚖️</span>
                      <h4 className="font-bold text-[#1A2B4A]">Vakil Says</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      This agreement contains several one-sided clauses. The deposit forfeiture
                      clause may be challenged under rental laws...
                    </p>
                  </div>

                  <div className="bg-[#F4F1EB] rounded-lg p-4 border-l-4 border-[#F5B942]">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🧑‍🌾</span>
                      <h4 className="font-bold text-[#1A2B4A]">Aam Aadmi Says</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      भाई, इसमें कुछ बातें ठीक नहीं लग रही। जमानत राशि जब्त करने की शर्त गलत है...
                    </p>
                  </div>

                  <div className="bg-[#F4F1EB] rounded-lg p-4 border-l-4 border-[#1A2B4A]">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🏛️</span>
                      <h4 className="font-bold text-[#1A2B4A]">Nyayaadheesh Says</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>Action:</strong> Negotiate clauses 3, 5, 7. Do not sign as-is.
                      <br />
                      <strong>Summary:</strong> Modify before signing / संशोधन के बाद ही हस्ताक्षर करें
                    </p>
                  </div>
                </div>

                {/* Download PDF */}
                <button className="w-full bg-[#1A2B4A] hover:bg-[#2a3b5a] text-white font-bold py-3 px-6 rounded-lg transition-all">
                  📄 Download PDF Summary / PDF डाउनलोड करें
                </button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default AppPage;

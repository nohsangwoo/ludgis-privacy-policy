'use client'

import { useState } from 'react';

export default function MeditrackPrivacyPolicy() {
    const sections = [
        { title: '1. 총칙', content: '이 개인정보 처리방침은 [약먹자] ("본 앱")에서 제공하는 서비스 이용과 관련하여 사용자의 개인정보 보호를 위해 마련되었습니다. 본 앱은 대한민국에서 배포되며, 개인정보 보호 관련 법령에 따라 사용자의 개인정보를 보호하고, 이에 대한 관련 내용을 명시합니다.' },
        { title: '2. 개인정보의 수집 및 이용 목적', content: '본 앱은 약 복용 알람을 제공하는 서비스로, 사용자의 약 복용 시간을 알림으로 제공하기 위해 설계되었습니다. 본 앱은 사용자의 개인정보를 수집하거나 저장하지 않으며, 사용자가 입력하는 정보는 기기에만 저장되고 서버에 전송되지 않습니다.' },
        { title: '3. 수집하는 개인정보 항목', content: '본 앱은 사용자의 개인정보를 전혀 수집하지 않습니다.' },
        { title: '4. 개인정보의 보유 및 이용기간', content: '본 앱은 개인정보를 수집하지 않기 때문에 별도의 보유 및 이용기간이 존재하지 않습니다.' },
        { title: '5. 개인정보의 제3자 제공', content: '본 앱은 개인정보를 수집하지 않으므로, 사용자의 개인정보를 제3자에게 제공하지 않습니다.' },
        { title: '6. 개인정보 보호를 위한 기술적/관리적 조치', content: '본 앱은 개인정보를 수집하지 않지만, 사용자의 데이터를 안전하게 보호하기 위해 기기에 저장된 정보는 운영체제에서 제공하는 보안 기능을 따릅니다.' },
        { title: '7. 개인정보 처리방침의 변경', content: '법률 및 서비스 변경에 따라 본 개인정보 처리방침은 변경될 수 있으며, 변경 사항은 앱 내 공지사항을 통해 안내됩니다.' },
        { title: '8. 연락처', content: '개인정보 처리방침과 관련된 문의는 아래 연락처로 문의해 주시기 바랍니다.\n\n[전화번호: +82 10-9915-7569] [이메일: milli@molluhub.com]' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <h1 className="text-2xl sm:text-3xl font-bold text-center p-6 bg-blue-600 text-white">개인정보 처리방침</h1>
                <div className="p-6">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="font-semibold text-lg text-blue-700 mb-2">
                                {section.title}
                            </h2>
                            <p className="text-gray-600 whitespace-pre-line">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

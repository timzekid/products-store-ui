export function formatAccount(account) {
    const formattedAccount =  {
        id: account.id,
        fullName: `${account.firstName} ${account.secondName}`,
        avatarUrl: account.avatarUrl
    };

    if (Object.keys(account.billingInfo).length) {
        formattedAccount.billingInfo = { ...account.billingInfo };
    } else {
        formattedAccount.billingInfo = {
            name: '',
            email: '',
            city: '',
            country: '',
            state: '',
            address: '',
            phoneNumber: '',
            zipCode: ''
        };
    }

    return formattedAccount;
}

export function formatQuizSession(quizSession) {
    const assigneeData = quizSession.assigneeData || {};
    const quizSessionData = quizSession.quizSessionData;
    const points = quizSessionData.gainedPoints === 0
        ? 0
        : Math.round(quizSessionData.gainedPoints / quizSessionData.maxPoints * 100);

    return {
        points,
        id: quizSessionData.id,
        assigneeAvatarUrl: assigneeData.avatarUrl,
        assigneeName: `${assigneeData.firstName} ${assigneeData.secondName}`,
        date: quizSessionData.finishedAt,
        assigneeEmail: assigneeData.email,
        isFinished: quizSessionData.status === 'FINISHED',
        isPending: false
    };
}

export function formatPendingsEntities(quizSession) {
    return {
        id: quizSession.email,
        assigneeAvatarUrl: quizSession.avatarUrl,
        assigneeEmail: quizSession.email,
        isPending: true,
        isFinished: false
    };
}

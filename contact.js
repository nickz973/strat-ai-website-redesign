const inquiryForm = document.querySelector('.contact-form');

if (inquiryForm) {
  const submitButton = inquiryForm.querySelector('[type="submit"]');
  const status = document.getElementById('contact-status');
  let sending = false;

  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending || !inquiryForm.reportValidity()) return;

    sending = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    inquiryForm.setAttribute('aria-busy', 'true');
    status.dataset.state = 'sending';
    status.textContent = 'Sending your inquiry…';

    try {
      const response = await fetch(inquiryForm.action, {
        method: 'POST',
        body: new FormData(inquiryForm),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const errors = Array.isArray(data?.errors)
          ? data.errors.map((error) => error.message).filter(Boolean).join(' ')
          : '';
        throw new Error(errors || 'Your inquiry could not be sent. Please try again or email yaseen@strataisolutions.com.');
      }

      inquiryForm.reset();
      status.dataset.state = 'success';
      status.textContent = 'Thank you! Your inquiry has been sent. Our team will be in touch.';
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error instanceof TypeError
        ? 'We couldn’t confirm your submission. Your details are still here. Please check your connection and try again, or email yaseen@strataisolutions.com.'
        : error.message;
    } finally {
      sending = false;
      submitButton.disabled = false;
      submitButton.textContent = 'Send inquiry';
      inquiryForm.removeAttribute('aria-busy');
    }
  });
}

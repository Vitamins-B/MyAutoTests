
it("should register a new user", async () => {
    await browser.url('https://github.com/');
    await browser.pause(2000);

    let SignUp = await $('.HeaderMenu-link--sign-up');
    await SignUp.click();
    await browser.pause(10000);

    
    let signUpText = await $('[data-target="typing-effect.content"]')
    console.log("Sign Up text is: " + await signUpText.getText()) // outputs: Welcom to GitHub...

             
    let inputEmail = await $("#email");
    await inputEmail.addValue("coolbaba@test.ua");
    await browser.pause(2000);
    const firstContinueButton =  $('[data-optimizely-event="click.signup_continue.email"]');
    firstContinueButton.click();


    let inputPassword = await $("#password");
    await inputPassword.addValue("SuperSecretPassword9!");
    await browser.pause(2000);
    const secondContinueButton =  $('[data-optimizely-event="click.signup_continue.password"]');
    secondContinueButton.click();

    let inputUsername = await $("#login");
    await inputUsername.addValue("cool5baba");
    await browser.pause(2000);
    const thirdContinueButton =  $('[data-optimizely-event="click.signup_continue.username"]');
    thirdContinueButton.click();

    let optInInput = await $("#opt_in");
    await optInInput.addValue("y");
    await browser.pause(2000);
    const fourthContinueButton = $('[data-optimizely-event="click.signup_continue.opt-i"]');
    fourthContinueButton.click();

}); 

it("should perform the specified actions", async () => {
    await browser.url('https://github.com/');

    const headerTarget = await $('.color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3');
    await browser.pause(2000);
    await headerTarget.scrollIntoView();
    await browser.pause(2000);

    const startTrialLink = await $('=Start a free enterprise trial');
    await startTrialLink.isDisplayedInViewport();

    await startTrialLink.click();

    const trialPlanText = await $('.d-none.d-md-block.mt-0.mb-3.text-center.h1.lh-condensed-ultra');
    await trialPlanText.isDisplayedInViewport();

     
    const EnterButton = await $('.d-flex.flex-column.flex-items-center.height-full.rounded-3.color-shadow-extra-large.color-bg-default.p-3.p-lg-5');
    await EnterButton.click();

});

it('GitHub Subscription Test', async () => {
    await browser.url('https://github.com/');

    const subscribeLink = await $('.btn-mktg.mb-4.btn-muted-mktg');
    await browser.pause(2000);
    await subscribeLink.scrollIntoView();
    await browser.pause(2000);
    
    await expect(subscribeLink).toHaveText('Subscribe'); 
    await subscribeLink.isClickable(); 
    subscribeLink.click();

    await browser.url('https://resources.github.com/newsletter/');
    await browser.pause(1000);

    const LoginForm = await $('.landing-page-form.py-10');
    await LoginForm.scrollIntoView();
    await browser.pause(2000);

    let inputWorkEmail = await $('.Primer_Brand__TextInput-module__TextInput___EtKj3');
    await inputWorkEmail.addValue("coolbaba@test.ua");
    await browser.pause(2000);
    

    const newsletterHeader = $('//h1[contains(text(), "Subscribe to our developer newsletter")]');
    expect(newsletterHeader).toBeExisting(); 

    await browser.pause(1500);

      
    const countryDropdown = $('#country');
    countryDropdown.selectByVisibleText('Spain');

    await browser.pause(1500);

    const subscribeCheckbox = $('gated-agree-marketingEmailOptin1');
    subscribeCheckbox.click();

    await browser.pause(1500);

    const subscribeSubmitButton = await $('.Primer_Brand__Button-module__Button___lDruK');
    await subscribeSubmitButton.click();

    await browser.pause(1500);

    const successMessage = $('//div[contains(text(), container-xl position-relative "Thank you for subscribing!")]');
    expect(successMessage).toBeExisting(); 

    await browser.pause(1500);
});

it('Search', async () => {
    await browser.url('https://github.com/');

    await browser.pause(1500);

    let searchButton = await $('.header-search-button');
    await searchButton.click();
    await browser.pause(1500);

    let searchInput = await $('#query-builder-test')
    await searchInput.addValue("doc")
    await browser.pause(1500);
    
    await browser.keys(['Enter']);
    await browser.pause(3000);

    const elementWithText = await browser.$('//body//*[contains(text(), "doc")]');

    if (elementWithText) {
        console.log('"doc" was found');
    } else {
        console.log('"doc" was not found');
    }
   });


    




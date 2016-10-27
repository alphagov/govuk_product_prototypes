---
layout: techdoc
product: Pay
primary_nav: pay
phase: beta
section: documentation
title: Documentation

search: true
---

<h1 class="toc-ignore">Documentation</h1>

<p>This documentation is for developers, technical architects and service managers interested in using GOV.UK Pay.</p>

<p>If your problem or question is not addressed in this documentation, please contact us at <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">govuk-pay-support@digital.cabinet-office.gov.uk</a>, including any error messages you’re getting.</p>

<h1>About GOV.UK Pay</h1>

<p>GOV.UK Pay makes it easy for departments and agencies across government to take payments. It provides a standard set of GOV.UK branded pages which can be incorporated into a service to take payments, and an service admin site which enables services to administer and process payments taken through GOV.UK Pay. Much of GOV.UK Pay’s functionality can be incorporated into existing case management tools via our API.</p>

<p>GOV.UK Pay is currently in beta development.</p>

<p>The platform can connect your government service to different <a href="https://en.wikipedia.org/wiki/Payment_service_provider">payment service providers (PSPs)</a>. (During beta, the platform will be connected to a single PSP.)</p>

<p>During beta, GOV.UK Pay will support credit and debit card payments only. Over time, further payment methods, such as direct debit or eWallet, will be added.</p>

<p>Your service only needs to integrate with GOV.UK Pay once to let your users make credit and debit card payments. When GOV.UK Pay is expanded to accept other payment methods, your service will not have to undertake any new integration. Using GOV.UK Pay will save your team time compared to implementing support for multiple PSPs and payment methods from scratch. </p>

<p>The platform currently supports one-off payments (like fees, fines or licence payments). In the future, it will also support recurring payments, for example, monthly tax payments.</p>

<blockquote>
  <p>There is no charge to use GOV.UK Pay. You will still need to pay your PSP's transaction fees. </p>
</blockquote>

<p>There are <a href="https://gds.blog.gov.uk/2015/10/15/introducing-gov-uk-pay/">4 departments and agencies currently partnering with the platform</a>.</p>

<p>To find out more about GOV.UK Pay, read our <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/support-contact-and-more-information">blogs and newsletters</a>.</p>

<h1>Before you start</h1>

<p>To start using the GOV.UK Pay platform, you'll need:</p>

<ul>
  <li>a new or existing digital service that needs to take payments</li>
  <li>people with the development skills to build the technical integration with GOV.UK Pay</li>
  <li>your own PSP contracts for gateway and merchant acquirer services (there are existing cross-government contracts offering competitive transaction costs that may be available to you - please email us at <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">govuk-pay-support@digital.cabinet-office.gov.uk</a> if you’d like to discuss contractual questions)</li>
  <li>points of contact to communicate with the GOV.UK Pay team - this is likely to be your service’s product owner or service manager, as well as a technical lead</li>
</ul>

<p>Make sure you’re also familiar with the government best practice on <a href="https://www.gov.uk/service-manual/making-software/deployment.html">deploying new software</a>.</p>

<blockquote>
  <p>If you are new to the GOV.UK Pay API, we recommend you take a look at the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/quick-start-guide-701213f3-ff34-4eb7-a830-fd843312fae8">quick start guide</a>, which explains how to access the API and start exploring what it can do.</p>
</blockquote>

<h1>Quick start guide</h1>

<p>The GOV.UK Pay platform is based on REST principles with endpoints returning data in JSON format, and standard HTTP error response codes. The platform API allows you to:</p>

<ul>
  <li>initiate and complete payments</li>
  <li>issue refunds</li>
  <li>view the event history for individual payments</li>
  <li>view transactions within a specified time period</li>
</ul>

<p>This section explains how to get started with our API Explorer.</p>

<h4>Account setup</h4>

<p>If your department or agency is not yet a beta partner, please contact us at <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">govuk-pay-support@digital.cabinet-office.gov.uk</a> to discuss using GOV.UK Pay</p>

<p>If your department or agency is participating in the beta, it will have a GOV.UK Pay service account (in some cases, it may have several service accounts, one for each service that is going to integrate with Pay).</p>

<p>To use the GOV.UK Pay API, you will need your own individual staff account. A staff account is linked to a service account and can be used to create API keys for that service, as well as access the transaction history and service settings.</p>

<ol>
  <li><p>Have your service manager email <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">govuk-pay-support@digital.cabinet-office.gov.uk</a> to get your staff account credentials. You'll receive access to a sandbox account which allows you to familiarise yourself and your developers with the platform before processing real payments. The GOV.UK Pay team will set up your service and provide you with login details for your account.</p></li>
  <li><p>Sign in to the <a href="https://selfservice.payments.service.gov.uk/">self-service admin site</a> with the sandbox account login details you received.</p></li>
  <li><p>Click on the API key section, then click <strong>Generate a new key</strong>.</p></li>
</ol>

<p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/Generate+API+key+image1.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/Generate+API+key+image1.png" alt=""></a>
 <br><br>Enter a description for your API key. <br><br>
 <a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/DescribeAPIKey+image2.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/DescribeAPIKey+image2.png" alt=""></a>
 <br><br>Your API key will be shown on the screen for you to copy.<br><br> <a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/NewKeygenerate+image+3.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/NewKeygenerate+image+3.png" alt=""></a></p>

<blockquote>You must store your API keys away securely. Make sure you never share this key in publicly accessible documents or repositories, or with people who shouldn't be using the GOV.UK Pay API directly. <a href="https://gds-payments.gelato.io/reference/docs/security">Read our security section</a> for more information on how to keep your API key safe.</blockquote>

<h4>API Explorer setup</h4>

    <p>The quickest way to learn about the API is to use <a href="https://gds-payments.gelato.io/api-explorer/">the API Explorer</a> with the API key that you just created. </p>

    <ol>
      <li>
        <a href="https://gds-payments.gelato.io/api-explorer/">Go to the API Explorer</a> and click the blue “Add API Credentials” button. <br><br>
        <a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-add-api-key.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-add-api-key.png" alt=""></a>
        <br><br>In the resulting pop-up, enter the following values:

        <ul>
          <li>For <strong>API Key</strong>, enter "[YOUR-API-KEY]" (do not include the quotation marks), replacing [YOUR-API-KEY] with the actual value of your sandbox API key, as shown in the screenshot below. You do not need to put the "Bearer: " prefix which is required when calling the API from code; the API Explorer adds that automatically.</li>
          <li>For <strong>Label</strong>, enter "Authorization" (do not include the quotation marks).</li>
        </ul>
      </li>
    </ol>

    <blockquote>
      <p>Make sure you are using an API key from your sandbox account on the self-service site, not the production account.</p>
    </blockquote>

    <h4>Making a test API call</h4>

      <ol>
        <li>
          <p>To test the API Explorer, select <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/general/create-new-payment">Create new payment</a> from the API Explorer <strong>Action</strong> dropdown menu. Click on the <strong>Body</strong> tab lower down to see an example JSON body that you would send when creating a payment.</p>
          <pre lang=""><code>{
            "amount": 12000,
            "reference": "12345",
            "description": "New passport application",
            "return_url": "https://service-name.gov.uk/transactions/12345"
          }
        </code></pre>
        <p>As well as details of the payment, you'll notice that you need to send a <code>return_url</code> when creating a payment. The reason for this is that users go to GOV.UK Pay hosted pages to actually make their payment.
          The <code>return_url</code> is the URL of a page on your service that the user will be redirected to after they have completed their payment (or payment has failed).
          <br><br>
          <a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-api-explorer-createpay.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-api-explorer-createpay.png" alt=""></a></p>
        </li>
        <li><p>Click the green <strong>Send Request</strong> button.</p></li>
        <li><p>If the API Explorer is set up correctly, you will receive a 201 Created response with a JSON body, confirming that the payment was created. Note that the JSON includes a <code>next_url</code> link. This URL is where your service should redirect the user for them to make their payment.
          <br><br>
          <a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-api-explorer-response.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-api-explorer-response.png" alt=""></a></p></li>
          <li>
            <p>Go to the <code>next_url</code> with your browser. You'll see the payment screen. Refer to the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/testing-gov-uk-pay">Testing GOV.UK Pay</a> section to find a mock credit card number that you can enter to simulate a payment in the sandbox environment. For the rest of the details, enter some test information, bearing in mind that:</p>

            <ul>
              <li>the expiry date must be in the future</li>
              <li>the postcode must be valid</li>
            </ul>
          </li>
          <li><p>Submit the payment.</p></li>
          <li><p>Go to the <a href="https://selfservice.payments.service.gov.uk/">service admin site</a>. Select <strong>Transactions</strong> at left. You’ll see the payment you just made.</p></li>
        </ol>

        <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/transaction+list+image+4.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/transaction+list+image+4.png" alt=""></a></p>

        <a id="payment-flow-overview" name="payment-flow-overview"></a>
        <h1>Payment flow overview</h1>

        <p>This section outlines how your service will interact with GOV.UK Pay after integration.</p>

        <h4>
          <a id="overview-of-payment-flow" class="anchor" href="#overview-of-payment-flow" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Overview of payment flow</h4>

          <p>When an end user needs to make a payment, your service makes an API call to create a new payment, then redirects the user to the payment pages hosted on GOV.UK Pay. </p>

          <p>The end user enters their payment details (for example, credit/debit card details and billing address) on the Pay pages. Pay handles all the details of verifying the payment with the underlying Payment Service Provider. </p>

          <p>After the transaction reaches a final state, the end user is then redirected back to your service.</p>

          <p>A final state means that the transaction:</p>

          <ul>
            <li>succeeds</li>
            <li>fails (for example because the payment details are wrong)</li>
            <li>cannot be completed because of a technical error</li>
            <li>was cancelled by your service</li>
          </ul>

          <p>When the user arrives back at your service, you can use the API to check the status of the transaction and show them an appropriate message.</p>

          <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-transaction-states.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-transaction-states.png" alt=""></a></p>

          <h4>
            <a id="payment-flow-making-a-payment" class="anchor" href="#payment-flow-making-a-payment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Payment flow: making a payment</h4>

            <p>Let's walk through an example of the payment flow in more detail.</p>

            <p>Imagine that this is a page on your service, where the end user needs to make a payment. </p>

            <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-service-pay-page.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-service-pay-page.png" alt=""></a></p>

            <p>Note that this page might be the end point of a series of pages you host which allow the user to choose between a variety of possible payments.</p>

            <p>The user clicks <strong>Continue</strong>.</p>

            <p>At this point, your service makes a <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/general/create-new-payment"><strong>Create new payment</strong></a> call to the Pay API. The body of the call contains information in JSON format:</p>
            <pre lang="javascript"><code><div class="ace-tomorrow"><div class="ace_static_highlight" style="counter-reset:ace_line 0"><div class="ace_line"><span class="ace_paren ace_lparen">{</span> 
            </div><div class="ace_line">  <span class="ace_string">"amount"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_constant ace_numeric">14500</span><span class="ace_punctuation ace_operator">,</span>
          </div><div class="ace_line">  <span class="ace_string">"description"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"Payment description"</span><span class="ace_punctuation ace_operator">,</span>
        </div><div class="ace_line">  <span class="ace_string">"return_url"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"https://your.service.gov.uk/completed"</span><span class="ace_punctuation ace_operator">,</span>
      </div><div class="ace_line">  <span class="ace_string">"reference"</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"12345"</span>
    </div><div class="ace_line"><span class="ace_paren ace_rparen">}</span>
  </div></div></div></code></pre>
  <ul>
    <li>
      <strong>amount</strong>: in pence; in this example, the payment is for £145</li>
      <li>
        <strong>description</strong>: A human-readable description of the payment; this will be shown to the end user on the payment pages and to your staff on the GOV.UK Pay self-service site (it must not contain URLs)</li>
        <li>
          <strong>return_url</strong>: This is an HTTPS URL on your site that the user will be sent back to once they have completed their payment attempt on GOV.UK Pay</li>
          <li>
            <strong>reference</strong>: This is the reference number you wish to associate with this payment. The format is up to you, so if you have an existing format, you can keep using it with Pay (it must not contain URLs)</li>
          </ul>

          <p>This is the header and the first part of the JSON body of the response to the <strong>Create new payment</strong> API call that your service will receive:</p>
          <pre lang="response"><code>HTTP/1.1 201 Created
            Content-Type: application/json
            Location: https://publicapi.pymnt.uk/v1/payments/icus7b4umg4b4g5fat4831es5f
          </code></pre><pre lang="javascript"><code><div class="ace-tomorrow"><div class="ace_static_highlight" style="counter-reset:ace_line 0"><div class="ace_line"><span class="ace_paren ace_lparen">{</span>
        </div><div class="ace_line">  <span class="ace_string">"payment_id"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"i3us7bqumg4b4g5fae48h1es5f"</span><span class="ace_punctuation ace_operator">,</span>
      </div><div class="ace_line">  <span class="ace_string">"payment_provider"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"acme"</span><span class="ace_punctuation ace_operator">,</span>
    </div><div class="ace_line">  <span class="ace_string">"amount"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_constant ace_numeric">14500</span><span class="ace_punctuation ace_operator">,</span>
  </div><div class="ace_line">  <span class="ace_string">"state"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span>
</div><div class="ace_line">    <span class="ace_string">"status"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"created"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">    <span class="ace_string">"finished"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_constant ace_language ace_boolean">false</span>
</div><div class="ace_line">  <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"description"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"Payment description"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"return_url"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"https://your.service.gov.uk/completed"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"reference"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"12345"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"created_date"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"2016-06-24T11:46:11.414Z"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"_links"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span>
</div><div class="ace_line">    <span class="ace_string">"self"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span>
</div><div class="ace_line"><span class="ace_indent-guide">    </span>  <span class="ace_string">"href"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"https://publicapi.pymnt.uk/v1/payments/icus7b4umg4b4g5fat4831es5f"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line"><span class="ace_indent-guide">    </span>  <span class="ace_string">"method"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"GET"</span>
</div><div class="ace_line">    <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">    <span class="ace_string">"next_url"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span>
</div><div class="ace_line"><span class="ace_indent-guide">    </span>  <span class="ace_string">"href"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"https://www-integration-2.pymnt.uk/secure/bb0a272c-8eaf-468d-b3xf-ae5e000d2231"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line"><span class="ace_indent-guide">    </span>  <span class="ace_string">"method"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"GET"</span>
</div><div class="ace_line">    <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line"> <span class="ace_keyword ace_operator">...</span><span class="ace_paren ace_rparen">}</span>  
</div><div class="ace_line"><span class="ace_paren ace_rparen">}</span>
</div></div></div></code></pre>
<p>The beginning of the response confirms the properties of the attempted payment.</p>

<p>The <code>self</code> URL (also provided in the Location header of the response) is a unique identifier for the payment. It can be used to retrieve its status details in future.</p>

<p>The <code>next_url</code> is the URL where you should now direct the end user. It points to a payment page hosted by GOV.UK Pay where the user can enter their payment details. Note that this is a one-time URL; after it's been visited once, it will give an error message.</p>

<p>When your service redirects the user to <code>next_url</code>, they see a page something like this:</p>

<p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-page.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-page.png" alt=""></a></p>

<p>The page shows the <code>description</code> you provided as well as the amount the end user has to pay, making it clear what they're paying for. </p>

<p>The user enters their payment details and clicks <strong>Continue</strong>.</p>

<p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-details-page.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-details-page.png" alt=""></a></p>

<p>If the details are valid and the payment is approved, the user is then taken to a payment confirmation page, still hosted by GOV.UK Pay:</p>

<p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-confirm-page.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-confirm-page.png" alt=""></a></p>

<p>After confirming, the user is directed to the <code>return_url</code> you provided in the initial request.</p>

<p>If the payment <em>cannot</em> be approved, the user is shown an error page with a message describing the reason, for example:</p>

<p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-declined.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/flow-payment-declined.png" alt=""></a></p>

<p>The link to try the payment again sends the user to the <code>return_url</code> you provided in the initial request.</p>

<h4>
  <a id="payment-flow-after-payment" class="anchor" href="#payment-flow-after-payment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Payment flow: after payment</h4>

  <p>After the user attempts payment, GOV.UK Pay returns them to the <code>return_url</code> you provided in the initial request, whatever the status of the payment.</p>

  <p>The <code>return_url</code> should specify a page on your service. When the user visits the <code>return_url</code>, your service should:</p>

  <ul>
    <li>match the returning user with their payment (with a secure cookie, or a secure random ID string included in the <code>return_url</code>)</li>
    <li>check the status of the payment using an API call</li>
  </ul>

  <p>See the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/integration-details">Integration details</a> section for more details about how to match the user to the payment.</p>

  <p>To check the status of the payment, you must make a <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/v1/find-payment-by-id"><strong>Find payment by ID</strong></a> API call, using the <code>payment_id</code> of the payment as the parameter.</p>

  <p>The URL to do this is the same as the <code>self</code> URL provided in the response when the payment was first created.</p>

  <p>As usual, the response body contains information about the payment encoded in JSON format. Here is the beginning of a typical response:</p>
  <pre lang="javascript"><code><div class="ace-tomorrow"><div class="ace_static_highlight" style="counter-reset:ace_line 0"><div class="ace_line"><span class="ace_paren ace_lparen">{</span>
  </div><div class="ace_line">  <span class="ace_string">"payment_id"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"i3us7bqumg4b4g5fae48h1es5f"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"payment_provider"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"acme"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"amount"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_constant ace_numeric">14500</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">  <span class="ace_string">"state"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span>
</div><div class="ace_line">    <span class="ace_string">"status"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"success"</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line">    <span class="ace_string">"finished"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_constant ace_language ace_boolean">true</span>
</div><div class="ace_line">  <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">,</span>
</div><div class="ace_line"><span class="ace_keyword ace_operator">...</span>
</div><div class="ace_line"><span class="ace_paren ace_rparen">}</span>
</div></div></div></code></pre>
<p>The <code>state</code> array within the JSON lets you know the outcome of the payment:</p>

<ul>
  <li>The <code>status</code> value describes a stage of the payment journey.</li>
  <li>The <code>finished</code> value indicates if the payment journey is complete or not; that is, if the <code>status</code> of this payment can change.</li>
</ul>

<p>In this example, the payment was successful, and the payment journey is finished.</p>

<p>It is up to your page at the <code>return_url</code> to show an appropriate message based on the state of the payment. For example, for a completed payment, you would likely want to confirm that the payment has been received and explain what will happen next. For a failed payment, you should make clear that payment failed and offer the user a chance to try again.</p>

<p>Now that you understand the payment process, see the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/integration-details">Integration details</a> section for more  about how you can integrate your service with GOV.UK Pay.</p>


  <a id="api-reference" name="api-reference"></a>
  <h1>API reference</h1>

  <p>The GOV.UK Pay platform is based on REST principles with endpoints returning data in JSON format, and standard HTTP error response codes. The platform API allows you to:</p>

  <ul>
    <li>initiate and complete payments</li>
    <li>view the event history for individual payments</li>
    <li>view transactions within a specified time period</li>
    <li>provide full or partial refunds
      <br><br>
    </li>
  </ul>

  <h4>
    <a id="api-overview" class="anchor" href="#api-overview" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API overview</h4>

    <p>The base URL for the API is <a href="https://publicapi.payments.service.gov.uk/">https://publicapi.payments.service.gov.uk/</a></p>

    <p>The same base URL is now used for testing and production. The API key you use determines if the actions are treated as sandbox test payments or processed as real payments.</p>

    <p>For full details of each API action, see the API Browser:</p>

    <ul>
      <li><a href="https://gds-payments.gelato.io/docs/versions/1.0.0/resources/general">General functions</a></li>
      <li><a href="https://gds-payments.gelato.io/docs/versions/1.0.0/resources/payment-id">Payment ID functions</a></li>
    </ul>

    <p>You can also use our interactive <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/">API Explorer</a> to try out API calls and view responses. </p>

    <p>See the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/quick-start-guide">Quick Start Guide</a> section for how to set up the API Explorer. Make sure you enter your sandbox API key to avoid generating real payments!</p>

    <h4>
      <a id="api-authentication" class="anchor" href="#api-authentication" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API authentication</h4>

      <p>GOV.UK Pay authenticates API calls with OAuth2 HTTP bearer tokens. These are easy to use and consist of one component: your API key. Bearer tokens are specified in <a href="http://tools.ietf.org/html/rfc6750">RFC 6750</a>.</p>

      <p>When making an API call, you’ll need to add your API key to an "Authorization" HTTP header and prefix it with "Bearer ". This is an example of how a header would look. </p>
      <pre lang="text"><code><div class="ace-tomorrow"><div class="ace_static_highlight" style="counter-reset:ace_line 0"><div class="ace_line">Authorization: Bearer 2o9bkusxaicha5c9gnsj790of7asggo1feraoufbai4a
      </div></div></div></code></pre>
      <h4>
        <a id="payment-status-lifecycle" class="anchor" href="#payment-status-lifecycle" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Payment status lifecycle</h4>

        <p>This diagram gives an overview of the payment status lifecycle and the possible outcomes.</p>

        <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-transaction-states.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-transaction-states.png" alt=""></a></p>

        <p>You can check the status of a given payment using the <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/v1/find-payment-by-id"><strong>Find payment by ID</strong></a> API call.</p>

        <p>The response will include a <code>status</code> value as described in the table below, and a true/false <code>finished</code> value which indicates if the status can change.</p>

        <table>
          <thead>
            <tr>
              <th>status value</th>
              <th>Meaning</th>
              <th>finished value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>created</td>
              <td>Payment created; user has not yet visited next_url</td>
              <td>false</td>
            </tr>
            <tr>
              <td>started</td>
              <td>User has visited next_url and is entering payment details</td>
              <td>false</td>
            </tr>
            <tr>
              <td>submitted</td>
              <td>User has submitted payment details but has not yet clicked Confirm</td>
              <td>false</td>
            </tr>
            <tr>
              <td>success</td>
              <td>User successfully completed the payment</td>
              <td>true</td>
            </tr>
            <tr>
              <td>failed</td>
              <td>User didn't complete the payment, due to invalid or expired payment details, fraud block, etc.</td>
              <td>true</td>
            </tr>
            <tr>
              <td>cancelled</td>
              <td>Your service cancelled the payment using an API call or the self-service site.</td>
              <td>true</td>
            </tr>
            <tr>
              <td>error</td>
              <td>Something went wrong with GOV.UK Pay or the underlying Payment Service Provider.</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>

        <h4>
          <a id="http-status-codes" class="anchor" href="#http-status-codes" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>HTTP status codes</h4>

          <p>You will encounter typical HTTP success and error response codes when using the Pay API. Generally any: </p>

          <ul>
            <li>100 code is informational</li>
            <li>200 code indicates you’ve been successful</li>
            <li>300 code indicates a redirection</li>
            <li>400 code indicates a client error (your error)</li>
            <li>500 code indicates a server error (something went wrong on the GOV.UK Pay end)</li>
          </ul>

          <p>These are the known error codes you are likely to receive:</p>

          <table>
            <thead>
              <tr>
                <th>Common error code</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>200</td>
                <td>Payment information request succeeded</td>
              </tr>
              <tr>
                <td>201</td>
                <td>Payment has been created</td>
              </tr>
              <tr>
                <td>204</td>
                <td>The server successfully processed the request, but is not returning any content</td>
              </tr>
              <tr>
                <td>400</td>
                <td>The server cannot process the request due to a client error, eg missing details in the request or a failed payment cancellation</td>
              </tr>
              <tr>
                <td>401</td>
                <td>Required authentication has failed or not been provided</td>
              </tr>
              <tr>
                <td>404</td>
                <td>The resource you want cannot be found</td>
              </tr>
              <tr>
                <td>422</td>
                <td>Unprocessable entity obtained on a request validation</td>
              </tr>
              <tr>
                <td>Any 500 error</td>
                <td>Something is wrong with GOV.UK Pay - please contact us</td>
              </tr>
            </tbody>
          </table>

          <h4>
            <a id="api-error-codes" class="anchor" href="#api-error-codes" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API error codes</h4>

            <p>When an error occurs, you will receive these API codes in the body of the response, encoded as JSON. </p>

            <p>These error codes provide more information about why a request failed.</p>

            <table>
              <thead>
                <tr>
                  <th>Request type</th>
                  <th>Error code</th>
                  <th>Meaning</th>
                  <th>Cause</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Create payment</td>
                  <td>P0101</td>
                  <td>Missing mandatory attribute</td>
                  <td>The request you sent is missing a required attribute</td>
                </tr>
                <tr>
                  <td>Create payment</td>
                  <td>P0102</td>
                  <td>Invalid attribute value</td>
                  <td>The value of an attribute you sent is invalid</td>
                </tr>
                <tr>
                  <td>Create payment</td>
                  <td>P0197</td>
                  <td>Unable to parse JSON</td>
                  <td>The JSON you sent in the request body is invalid</td>
                </tr>
                <tr>
                  <td>Create payment</td>
                  <td>P0198</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay: contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Create payment</td>
                  <td>P0199</td>
                  <td>Account error</td>
                  <td>There is a problem with your service account: contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Find payment by ID</td>
                  <td>P0200</td>
                  <td>paymentId not found</td>
                  <td>No payment matched the paymentId you provided</td>
                </tr>
                <tr>
                  <td>Find payment by ID</td>
                  <td>P0298</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay: contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Return payment events by ID</td>
                  <td>P0300</td>
                  <td>paymentId not found</td>
                  <td>No payment matched the paymentId you provided</td>
                </tr>
                <tr>
                  <td>Return payment events by ID</td>
                  <td>P0398</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay: contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Search payments</td>
                  <td>P0401</td>
                  <td>Invalid parameters</td>
                  <td>The parameters you sent are invalid.</td>
                </tr>
                <tr>
                  <td>Search payments</td>
                  <td>P0402</td>
                  <td>Page not found</td>
                  <td>The requested page of search results does not exist</td>
                </tr>
                <tr>
                  <td>Search payments</td>
                  <td>P0498</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay: contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Cancel payment</td>
                  <td>P0500</td>
                  <td>paymentId not found</td>
                  <td>No payment matched the paymentId you provided</td>
                </tr>
                <tr>
                  <td>Cancel payment</td>
                  <td>P0501</td>
                  <td>Cancellation failed</td>
                  <td>Cancelling the payment failed; contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Cancel payment</td>
                  <td>P0598</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay; contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Create refund</td>
                  <td>P0600</td>
                  <td>paymentId not found</td>
                  <td>No payment matched the paymentId you provided</td>
                </tr>
                <tr>
                  <td>Create refund</td>
                  <td>P0601</td>
                  <td>Missing mandatory attribute</td>
                  <td>The request you sent is missing a required attribute</td>
                </tr>
                <tr>
                  <td>Create refund</td>
                  <td>P0602</td>
                  <td>Invalid attribute value</td>
                  <td>The value of an attribute you sent is invalid</td>
                </tr>
                <tr>
                  <td>Create refund</td>
                  <td>P0603</td>
                  <td>Refund not available</td>
                  <td>The payment is not available for refund.</td>
                </tr>
                <tr>
                  <td>Create refund</td>
                  <td>P0697</td>
                  <td>Unable to parse JSON</td>
                  <td>The JSON you sent in the request body is invalid</td>
                </tr>
                <tr>
                  <td>Create refund</td>
                  <td>P0698</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay; contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Get refund</td>
                  <td>P0700</td>
                  <td>refundId not found</td>
                  <td>No refund matched the refundId you provided</td>
                </tr>
                <tr>
                  <td>Get refund</td>
                  <td>P0798</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay; contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>Get refunds</td>
                  <td>P0800</td>
                  <td>refundId not found</td>
                  <td>No refund match the refundId you provided</td>
                </tr>
                <tr>
                  <td>Get refunds</td>
                  <td>P0898</td>
                  <td>Downstream system error</td>
                  <td>Internal error with GOV.UK Pay; contact us, quoting the error code</td>
                </tr>
                <tr>
                  <td>General</td>
                  <td>P0900</td>
                  <td>Too many requests</td>
                  <td>Your service account is sending requests above the allowed rate; try the request again in a few seconds</td>
                </tr>
                <tr>
                  <td>General</td>
                  <td>P0920</td>
                  <td>Request blocked by security rules</td>
                  <td>Our firewall blocked your request. See Troubleshooting section for details.</td>
                </tr>
              </tbody>
            </table>

            <h4>
              <a id="card-types" class="anchor" href="#card-types" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Card types</h4>

              <p>These are the possible values of the card_brand parameter.</p>

              <table>
                <thead>
                  <tr>
                    <th>card_brand</th>
                    <th>type</th>
                    <th>label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>visa</td>
                    <td>DEBIT</td>
                    <td>Visa</td>
                  </tr>
                  <tr>
                    <td>visa</td>
                    <td>CREDIT</td>
                    <td>Visa</td>
                  </tr>
                  <tr>
                    <td>master-card</td>
                    <td>DEBIT</td>
                    <td>Mastercard</td>
                  </tr>
                  <tr>
                    <td>master-card</td>
                    <td>CREDIT</td>
                    <td>Mastercard</td>
                  </tr>
                  <tr>
                    <td>american-express</td>
                    <td>CREDIT</td>
                    <td>American Express</td>
                  </tr>
                  <tr>
                    <td>diners-club</td>
                    <td>CREDIT</td>
                    <td>Diners Club</td>
                  </tr>
                  <tr>
                    <td>discover</td>
                    <td>CREDIT</td>
                    <td>Discover</td>
                  </tr>
                  <tr>
                    <td>jcb</td>
                    <td>CREDIT</td>
                    <td>Jcb</td>
                  </tr>
                  <tr>
                    <td>unionpay</td>
                    <td>CREDIT</td>
                    <td>Union Pay</td>
                  </tr>
                </tbody>
              </table>

              <h4>
                <a id="api-rate-limits" class="anchor" href="#api-rate-limits" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API rate limits</h4>

                <p>There is a maximum rate limit for requests to the API from your service account. The limit is high and most services are unlikely ever to exceed it.</p>

                <p>If you do exceed the limit (that is, send a large number of requests in a short amount of time), you will receive P0900 errors. If this happens, you can attempt any rate-limited requests again after a second has passed.</p>

                <p>Please contact us if you want to discuss the rate limiting applied to your service account.</p>


                <a id="integration-details" name="integration-details"></a>
                <h1>Integration details </h1>

                <p>This section gives more technical detail about how to integrate your service with GOV.UK Pay.</p>

                <h4>
                  <a id="creating-a-payment" class="anchor" href="#creating-a-payment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Creating a payment</h4>

                  <p>When you make a payment, you will need to supply a <code>reference</code>. This is a unique identifier for the payment. If your organisation already has an existing identifier for payments, you can use it here. </p>

                  <p>You will also need to supply a <code>return_url</code>, a URL hosted by your service for the user to return to after they have completed payment on GOV.UK Pay. See the section below on <strong>Choosing the return URL</strong> for more information.</p>

                  <p>You will need to store the URL from the Location header/in the <code>self</code> section of <code>links</code> in the JSON body (the same URL is shown in both places).  This URL contains the GOV.UK Pay <code>payment_id</code> which uniquely identifies the payment. An authenticated GET request to the URL will return information about the payment and its status.</p>

                  <blockquote>
                    <p>It is important that you do not expose the URL with the <code>payment_id</code> publically, for example as a URL parameter or in an insecure cookie. You should store it as a secure cookie or in a database.</p>
                  </blockquote>

                  <p>You will receive the <code>next_url</code>  to which you should direct the user to complete their payment. During the GOV.UK Pay beta, it is only returned in response to the initial POST call to create a payment, not on sub. It will only work once.</p>

                  <h4>
                    <a id="tracking-the-progress-of-a-payment" class="anchor" href="#tracking-the-progress-of-a-payment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Tracking the progress of a payment</h4>

                    <p>You can track the progress of a payment while the user is on GOV.UK Pay using the <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/v1/find-payment-by-id"><strong>Find payment by ID</strong></a> call.</p>

                    <p>NOTE: The status of the payment will go through several phases until it either succeeds or fails. See the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/api-reference">API reference section</a> for more details.</p>

                    <h4>
                      <a id="choosing-the-return-url-and-matching-user-to-payment" class="anchor" href="#choosing-the-return-url-and-matching-user-to-payment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Choosing the return URL and matching user to payment</h4>

                      <p>For security reasons, GOV.UK Pay does not add the payment ID or outcome to your <code>return_url</code> as parameters.</p>

                      <p>To match up a returning user with their payment, there are two recommended methods:</p>

                      <ul>
                        <li><p>use a secure cookie containing the Payment ID from GOV.UK Pay, issued by your service when the payment is created (before sending the user to <code>next_url</code>). Users won't be able to decrypt a secure cookie, so a fraudster could not alter the payment ID and intercept other users' payments.</p></li>
                        <li><p>create a secure random ID (such as a UUID) and include this as part of the <code>return_url</code>, using a different <code>return_url</code> for each payment. Since a securely generated UUID is not guessable, fraudsters will not be able to intercept users’ payments.</p></li>
                      </ul>

                      <blockquote>
                        <p>Note: If you create an ID yourself, you'll likely need to store this in a datastore mapped to the payment ID just after you create a payment.</p>
                      </blockquote>

                      <h4>
                        <a id="accepting-returning-users" class="anchor" href="#accepting-returning-users" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Accepting returning users</h4>

                        <p>A user directed to the return URL could have:</p>

                        <ul>
                          <li>paid successfully</li>
                          <li>not paid because their card was rejected or they clicked cancel</li>
                          <li>not paid because your service (via the API) or service manager (via the self-service dashboard) cancelled the payment in progress</li>
                        </ul>

                        <p>Your service should use the API to check the payment status when the user reaches the return URL, and provide an appropriate response based on the final status of the payment attempt.</p>

                        <h4>
                          <a id="when-a-user-doesnt-complete-their-payment-journey" class="anchor" href="#when-a-user-doesnt-complete-their-payment-journey" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>When a user doesn't complete their payment journey</h4>

                          <p>The user may close their browser or lose internet connection in the middle of the payment flow on GOV.UK Pay. These users will not be redirected back to your service. </p>

                          <p>You can still check on the status of these payments by making a GET request using the Location Header or Self Link, the same way you would if they were redirected, but just after a set time (eg, an hour).</p>

                          <blockquote>
                            <p>Note: GOV.UK Pay will eventually expire incomplete payments, but you should expect an occasional success or failure if the user experienced problems right at the moment of the redirect.</p>
                          </blockquote>

                          <p>If a user does not have enough funds in their account to make a payment, the current GOV.UK Pay frontend will not let them try again with separate card details. This will soon be fixed as part of the beta. </p>

                          <h4>
                            <a id="cancelling-a-payment" class="anchor" href="#cancelling-a-payment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Cancelling a payment</h4>

                            <p>You can cancel a payment that is not yet in a final state by using the <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/payment-id/cancel-payment"><strong>Cancel payment</strong></a> API call.</p>

                            <h4>
                              <a id="financial-reporting-integration" class="anchor" href="#financial-reporting-integration" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Financial reporting integration</h4>

                              <p>If you’re a beta partner, the GOV.UK Pay team will hold technical workshops with you to discuss how to integrate the reporting from GOV.UK Pay with your own financial systems. </p>

                              <p>With our API,  you’ll be able to:</p>

                              <ul>
                                <li>GET the status of an individual payment</li>
                                <li>cancel a payment that’s not yet captured</li>
                                <li>soon get the status of multiple payments based on certain criteria, e.g. date range (this feature is under development) </li>
                                <li>soon issue full and partial refunds (this feature is under development) </li>
                              </ul>


                              <a id="refunding-payments" name="refunding-payments"></a>
                              <h1>Refunding payments</h1>

                              <p>GOV.UK Pay now supports refunding payments. You can choose to refund part of a payment, or the full amount.</p>

                              <p>After issuing a partial refund of a payment, you can issue further partial refunds, until the full amount of the original payment has been refunded.</p>

                              <p>Each payment has a refund status which can take one of the following values:</p>

                              <table>
                                <thead>
                                  <tr>
                                    <th>Refund status</th>
                                    <th>Meaning</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>pending</td>
                                    <td>The payment is potentially refundable, but is not ready to be refunded yet.</td>
                                  </tr>
                                  <tr>
                                    <td>unavailable</td>
                                    <td>It is not possible to refund the payment: for example, the payment failed.</td>
                                  </tr>
                                  <tr>
                                    <td>available</td>
                                    <td>It's possible to initiate a refund. Note that this does not mean that the full original value of the payment is available to refund: there may have been previous partial refunds.</td>
                                  </tr>
                                  <tr>
                                    <td>full</td>
                                    <td>The original value of the payment has been fully refunded, so it is not possible to refund any more.</td>
                                  </tr>
                                </tbody>
                              </table>

                              <p>Note that in the sandbox, you will not see the <strong>pending</strong> status as there is no delay in processing a payment. In a live environment, successful payments will spend some time in <strong>pending</strong> state before a refund becomes possible.</p>

                              <h4>
                                <a id="refund-status-and-partial-refunds" class="anchor" href="#refund-status-and-partial-refunds" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Refund status and partial refunds</h4>

                                <p>You can find out the refund status of a payment with the API using the <strong>Find payment by ID</strong> or <strong>Search payments</strong> functions. </p>

                                <p>The response will contain a <strong>refund_summary</strong> section. Here is an example of that section of the response for a completed £50 payment with no previous refunds:</p>
                                <pre lang=""><code>  "refund_summary": {
                                  "status": "available",
                                  "amount_available": 5000,
                                  "amount_submitted": 0
                                },
                              </code></pre>
                              <p>In this example, the refund status of the payment is <strong>available</strong>, indicating that a refund can be initiated. The <strong>amount_available</strong> value is 5000: that is, £50 is available to be refunded. </p>

                              <p>The <strong>amount_submitted</strong> is 0, showing that there have been no previous refunds. </p>

                              <p>Partial refunds are possible, and you can make multiple partial refunds against the same payment. As you'd expect, the total of refunds against a payment can't be greater than the original payment.</p>

                              <p>Here's another example:</p>
                              <pre lang=""><code>  "refund_summary": {
                                "status": "available",
                                "amount_available": 6000,
                                "amount_submitted": 3000
                              },
                            </code></pre>
                            <p>In this case, the original payment was for £90. The <strong>amount_available</strong> value shows that only £60 is available to be refunded, because £30 has already been refunded in one or more partial refunds (as shown by <strong>amount_submitted</strong>). </p>

                            <p>If you needed to know the details of the partial refunds (for example, whether there had been a single refund of £30 or multiple smaller refunds), you could use the API function to <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/resources/payment-id/endpoints/get-all-refunds-for-a-payment">Get all refunds for a payment</a>.</p>

                            <h4>
                              <a id="refunding-with-the-api" class="anchor" href="#refunding-with-the-api" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Refunding with the API</h4>

                              <p>You can initiate a refund with the <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/payment-id/submit-a-refund-for-a-payment">Submit a refund for a payment</a> function. </p>

                              <p>You need to specify the <strong>paymentId</strong> of the original payment, and provide the amount to refund (in pence).</p>

                              <p>You should check that the amount you attempt to refund does not exceed the <strong>amount_available</strong> value; otherwise you will receive a P0603 error like this:</p>
                              <pre lang=""><code> {
                               "code": "P0603",
                               "description": "The payment is not available for refund. Payment refund status: amount_not_available"
                             }
                           </code></pre>
                           <p>Each refund has a unique <strong>refund_id</strong>. </p>

                           <p>You can use the <a href="https://gds-payments.gelato.io/docs/versions/1.0.0/resources/payment-id/endpoints/get-all-refunds-for-a-payment">Get all refunds for a payment</a> function to get information all the refunds for a payment (including their <strong>refund_id</strong>s).</p>

                           <p>You can retrieve information about an individual refund using the <a href="https://gds-payments.gelato.io/api-explorer/gov-uk-pay-api/versions/1.0.0/payment-id/find-payment-refund-by-id">Find payment refund by ID</a> function.</p>

                           <h4>
                            <a id="refunds-from-the-admin-site" class="anchor" href="#refunds-from-the-admin-site" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Refunds from the admin site</h4>

                            <p>As an alternative to refunding via the API, you can use the service admin site (<a href="https://selfservice.integration.pymnt.uk">https://selfservice.integration.pymnt.uk</a> during testing or <a href="https://selfservice.payments.service.gov.uk">https://selfservice.payments.service.gov.uk</a> for production) to view transactions and issue refunds.</p>

                            <p>Go to the Transactions section of the site to see a list of transactions.</p>

                            <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/transactions-section.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/transactions-section.png" alt=""></a></p>

                            <p>In this list, click on the reference for an individual payment (in the <strong>Reference number</strong> column) to see details of that payment (including any previous refunds).</p>

                            <p>In the details view, you can use the red <strong>Refund payment</strong> button at the upper right to carry out a full or partial payment.</p>

                            <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/refund-payment-button.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/refund-payment-button.png" alt=""></a></p>

                            <h4>
                              <a id="refund-notifications" class="anchor" href="#refund-notifications" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Refund notifications</h4>

                              <p>End users are automatically notified by email about payments (according to the settings you have entered in the self-service admin site), but not when a payment is refunded (either manually or via the API). You should arrange to notify end users about refunds as appropriate for your service.</p>


                              <a id="testing-gov-uk-pay" name="testing-gov-uk-pay"></a>
                              <h1>Testing GOV.UK Pay</h1>

                              <p>You will receive a sandbox account for testing in addition to your production credentials.</p>

                              <p>When testing, you’ll need to ensure:</p>

                              <ul>
                                <li>you’ve tested with mock card numbers (see below) to simulate both successful and unsuccessful transactions - never use real card numbers for testing purposes, as this breaks PCI rules</li>
                                <li>you test with your sandbox account, not your production account</li>
                                <li>REST calls succeed with 200 API codes</li>
                                <li>you’ve tested the user journey from your service to the payments platform using end-to-end/smoke tests</li>
                              </ul>

                              <h4>
                                <a id="integration-testing" class="anchor" href="#integration-testing" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Integration testing</h4>

                                <p>To check your integration with GOV.UK Pay is working as expected, you’ll need to run a series of tests.</p>

                                <p>We recommend that you build tests to include both the GOV.UK Pay API and its front end user journey. We are constantly iterating our interface, so you shouldn’t rely on any specific page layout, but you can build tests that address form elements (such as buttons) using their IDs. Alternatively, you can build stubs that will emulate GOV.UK Pay functionality. </p>

                                <p>Our APIs will evolve over time. We will always let you know in advance if we intend to make any breaking, or backwards-incompatible API changes so you can ensure your service works with the new version. Please see our section on versioning for more information. </p>

                                <p>There is guidance in the GOV.UK Service Manual on <a href="https://www.gov.uk/service-manual/making-software/deployment.html">smoke testing</a>. At the Government Digital Service, we tend to use Cucumber for testing (regardless of the core code language), as you can easily describe the behaviour you expect at the appropriate level. </p>

                                <p>If you experience any problems when testing, please <a href="https://docs.google.com/a/digital.cabinet-office.gov.uk/forms/d/1rk2w6S3WlpRd3dEDnApt4WEB8s-MDTooegmksk6CqnA/viewform">contact us</a>. </p>

                                <h4>
                                  <a id="mock-card-numbers-for-testing-purposes" class="anchor" href="#mock-card-numbers-for-testing-purposes" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock card numbers for testing purposes</h4>

                                  <p>When you're testing your integration, you must not use real card numbers. Use the below test numbers.</p>

                                  <p>When you're using these card numbers, you can enter any valid value for the other details (name, expiry date, card security code etc). For example, it doesn't matter what expiry date you enter, but it must be in the future.</p>

                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Testing action</th>
                                        <th>Card numbers to use</th>
                                        <th>Card type</th>
                                        <th>Debit/Credit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Simulate a successful transaction</td>
                                        <td>4444333322221111</td>
                                        <td>Visa</td>
                                        <td>Credit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>4242424242424242</td>
                                        <td>Visa</td>
                                        <td>Credit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>4000056655665556</td>
                                        <td>Visa</td>
                                        <td>Debit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>5105105105105100</td>
                                        <td>Mastercard</td>
                                        <td>Debit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>5200828282828210</td>
                                        <td>Mastercard</td>
                                        <td>Debit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>371449635398431</td>
                                        <td>American Express</td>
                                        <td>Credit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>3566002020360505</td>
                                        <td>JCB</td>
                                        <td>Credit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>6011000990139424</td>
                                        <td>Discover</td>
                                        <td>Credit</td>
                                      </tr>
                                      <tr>
                                        <td></td>
                                        <td>36148900647913</td>
                                        <td>Diners Club</td>
                                        <td>Credit</td>
                                      </tr>
                                      <tr>
                                        <td>Simulate card type not accepted</td>
                                        <td>6759649826438453</td>
                                        <td>Maestro</td>
                                        <td>Dedit</td>
                                      </tr>
                                      <tr>
                                        <td>Simulate a declined card</td>
                                        <td>4000000000000002</td>
                                        <td>Visa</td>
                                        <td>N/A</td>
                                      </tr>
                                      <tr>
                                        <td>Simulate an invalid CVC security code</td>
                                        <td>4000000000000127</td>
                                        <td>Visa</td>
                                        <td>N/A</td>
                                      </tr>
                                      <tr>
                                        <td>Simulate an expired card</td>
                                        <td>4000000000000069</td>
                                        <td>Visa</td>
                                        <td>N/A</td>
                                      </tr>
                                      <tr>
                                        <td>Simulate a general processing error</td>
                                        <td>4000000000000119</td>
                                        <td>Visa</td>
                                        <td>N/A</td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <h5>
                                    <a id="for-worldpay-accounts" class="anchor" href="#for-worldpay-accounts" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>For <em>Worldpay</em> accounts</h5>

                                    <p>Please refer to <a href="http://support.worldpay.com/support/kb/bg/testandgolive/tgl5103.html">Worldpay test card numbers</a></p>

                                    <h4>
                                      <a id="performance-testing" class="anchor" href="#performance-testing" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Performance testing</h4>

                                      <p>If you’d like to carry out any kind of performance testing, including that in a rate limiting environment, please <a href="https://docs.google.com/a/digital.cabinet-office.gov.uk/forms/d/1rk2w6S3WlpRd3dEDnApt4WEB8s-MDTooegmksk6CqnA/viewform">contact us</a> to arrange. </p>

                                      <a id="switching-to-production" name="switching-to-production"></a>
                                      <h1>Switching to production</h1>

                                      <p>Once you have finished testing with your sandbox account, here are the steps you will need to take to switch over from testing to production.</p>

                                      <ol>
                                        <li>Go to the <a href="https://selfservice.payments.service.gov.uk">self-service admin site</a> and log in with production credentials, not your sandbox credentials. Contact us at govuk-pay-support@digital.cabinet-office.gov.uk if you need production credentials.</li>
                                        <li>While logged in with your production credentials, generate an API key for use with your production code.</li>
                                        <li>Set up the Worldpay account as explained in the section below.</li>
                                      </ol>

                                      <p>The API endpoint for production is now the same as for testing:  <a href="https://publicapi.payments.service.gov.uk/">https://publicapi.payments.service.gov.uk/</a> </p>

                                      <h4>
                                        <a id="worldpay-setup" class="anchor" href="#worldpay-setup" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Worldpay setup</h4>

                                        <p>You must change some settings in your Worldpay account to get it ready for production use.</p>

                                        <ol>
                                          <li>Log in to Worldpay and in your Worldpay profile, set <strong>Capture delay</strong> to "Off".<br><br><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-worldpay-autocaptureoff.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/pay-worldpay-autocaptureoff.png" alt=""></a>
                                          </li>
                                          <li>Still in Worldpay, go to <strong>Profile &gt; Merchant Channel</strong> and set the endpoint for HTTP notifications from Worldpay to GOV.UK Pay to <a href="https://notifications.payments.service.gov.uk/v1/api/notifications/worldpay">https://notifications.payments.service.gov.uk/v1/api/notifications/worldpay</a>
                                            <br><br>
                                            Use the same URL for Test and Production channels within Worldpay. The completed settings should look like this:
                                            <br><br><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/worldpay-settings1.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/worldpay-settings1.png" alt=""></a>
                                          </li>
                                        </ol>

                                        <h4>
                                          <a id="emergency-contact-details" class="anchor" href="#emergency-contact-details" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Emergency contact details</h4>

                                          <p>Your service manager should have been given details of emergency contact methods to reach our support team in case of an urgent problem (for example, if you suspect that fraudulent transactions are being made on your account). </p>

                                          <p>Before you enter production, you should make sure that the right people on your team know how to report an emergency.</p>

                                          <h4>
                                            <a id="integrating-with-existing-reporting-systems" class="anchor" href="#integrating-with-existing-reporting-systems" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Integrating with existing reporting systems</h4>

                                            <p>If you’re a beta partner, the GOV.UK Pay team will hold technical workshops with you to discuss how to integrate the reporting from GOV.UK Pay with your own financial systems.</p>

                                            <a id="troubleshooting" name="troubleshooting"></a>
                                            <h1>Troubleshooting</h1>

                                            <p>This section explains how to troubleshoot common problems.</p>

                                            <h3>
                                              <a id="code-p0920-errors" class="anchor" href="#code-p0920-errors" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Code P0920 errors</h3>

                                              <p><strong>Problem</strong>: Some calls you make to the API receive a 400 Bad Request response, with this error in the response body:</p>
                                              <pre lang="javascript"><code><div class="ace-tomorrow"><div class="ace_static_highlight" style="counter-reset:ace_line 0"><div class="ace_line"><span class="ace_paren ace_lparen">{</span>
                                              </div><div class="ace_line">  <span class="ace_string">"code"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"P0920"</span><span class="ace_punctuation ace_operator">,</span>
                                            </div><div class="ace_line">  <span class="ace_string">"description"</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"Request blocked by security rules. Please consult API documentation for more information."</span>
                                          </div><div class="ace_line"><span class="ace_paren ace_rparen">}</span>
                                        </div></div></div></code></pre>
                                        <p><strong>Fix</strong>: This response means that your API call was blocked by our firewalls. Check that the API call you sent was correctly formed. </p>

                                        <p>Possible reasons why your call may be rejected include:</p>

                                        <ul>
                                          <li>sending a POST call with an empty body where content in the body is expected</li>
                                          <li>the use of invalid characters such as <code>&lt;</code>, <code>&gt;</code>, <code>|</code>, <code>"</code>
                                          </li>
                                          <li>the <code>return_url</code> you provide is not <code>https://</code>
                                          </li>
                                          <li>there are URLs inside the <code>reference</code> or <code>description</code> you provide</li>
                                        </ul>

                                        <h3>
                                          <a id="the-code-examples-in-the-documentation-dont-work" class="anchor" href="#the-code-examples-in-the-documentation-dont-work" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>The code examples in the documentation don't work</h3>

                                          <p><strong>Problem</strong>: The "Example Request" code snippets in the API documentation always cause the request to fail with a "401 unauthorized" error.</p>

                                          <p><strong>Fix</strong>: Remember that you must send the API key with "Bearer " in front of it (not including the quotation marks.) This is not made clear in the code examples due to a technical limitation.</p>

                                          <p>If the code example includes a line like this:</p>
                                          <pre lang="ruby"><code><div class="ace-tomorrow"><div class="ace_static_highlight" style="counter-reset:ace_line 0"><div class="ace_line"><span class="ace_variable ace_language">request</span><span class="ace_paren ace_lparen">[</span><span class="ace_string ace_start">"</span><span class="ace_string">authorization</span><span class="ace_string ace_end">"</span><span class="ace_paren ace_rparen">]</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_string ace_start">'</span><span class="ace_string">YOUR API KEY HERE</span><span class="ace_string ace_end">'</span>
                                          </div></div></div></code></pre>
                                          <p>remember that you must actually use "Bearer " as the value.</p>

                                          <h1>Architecture</h1>

                                          <h4>
                                            <a id="card-payment-process" class="anchor" href="#card-payment-process" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Card payment process</h4>

                                            <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/Card+payment+process.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/Card+payment+process.png" alt=""></a></p>

                                            <h4>
                                              <a id="partner-architecture" class="anchor" href="#partner-architecture" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Partner architecture</h4>

                                              <p><a href="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/Partner-Architecture-v2.png" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/pay-govuk-documentation/Partner-Architecture-v2.png" alt=""></a></p>


                                              <h1>Versioning </h1>

                                              <blockquote>
                                                <p>The current version of the GOV.UK Pay API is 1.0. </p>
                                              </blockquote>

                                              <p>When we add new properties to the JSON responses, the Pay API version number will not change. You should develop your service to ignore properties it does not understand. </p>

                                              <p>New, dated versions of the public API will be released if JSON values are removed in a backwards incompatible manner. All these versions of the Pay API will be documented in our Revision History table below.</p>

                                              <p>Our version number will be updated in the URL when there is a release. All releases will be marked with full version numbers.</p>

                                              <h4>
                                                <a id="updating-to-the-latest-pay-api" class="anchor" href="#updating-to-the-latest-pay-api" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Updating to the latest Pay API</h4>

                                                <p>We’ll send you an email to let you know about any new versions of our API.</p>

                                                <p>If you want to update to our latest API, make sure you test your code before committing to the change.</p>

                                                <blockquote>
                                                  <p>We’ll support each version of the early beta Pay API for at least 1 month after we issue an upgrade notice. As the API matures, we may increase this support period to 3 or 6 months.</p>
                                                </blockquote>

                                                <p>Soon, we hope to let you check which version of our API you’re currently running by checking your dashboard. </p>

                                                <h4>
                                                  <a id="revision-history" class="anchor" href="#revision-history" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Revision history</h4>

                                                  <table>
                                                    <thead>
                                                      <tr>
                                                        <th>Version</th>
                                                        <th>Date</th>
                                                        <th>Author</th>
                                                        <th>Comments</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>1.0</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                      </tr>
                                                    </tbody>
                                                  </table>


                                                  <h1>Security</h1>

                                                  <h4>
                                                    <a id="reporting-vulnerabilities" class="anchor" href="#reporting-vulnerabilities" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Reporting vulnerabilities</h4>

                                                    <p>If you believe GOV.UK Pay security has been breached, contact us immediately at govuk-pay-support@digital.cabinet-office.gov.uk. If you are a production user and the suspected breach is severe, consider using the urgent contact details provided to your service manager.</p>

                                                    <p>Please don’t disclose the suspected breach publically until it has been fixed.</p>

                                                    <h4>
                                                      <a id="securing-your-developer-keys" class="anchor" href="#securing-your-developer-keys" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Securing your developer keys</h4>

                                                      <p>The GOV.UK Pay platform will let you create as many API keys as you want. </p>

                                                      <p>We suggest letting all your developers experiment with their own test keys in the Sandbox environment, but keys for real integrations should only be shared with the minimum number of people necessary. This is because these keys can be used to create and manipulate payments. Do not commit these keys to public source code repositories. </p>

                                                      <p>Revoke your key immediately using the self-service site if you believe it has been accidentally shared or compromised.</p>

                                                      <blockquote>
                                                        <p>If you believe your key has been used to make fraudulent payments, contact the GOV.UK support team using the urgent contact methods provided to your service manager.</p>
                                                      </blockquote>

                                                      <p>To further secure your live developer keys:</p>

                                                      <ul>
                                                        <li>don’t embed your developer keys in any of your code - this only increases the risk that they will be discovered (instead store your keys inside your configuration files)</li>
                                                        <li>don’t store your API keys in your application source tree (even when you’re not making your source code publically available)</li>
                                                        <li>revoke your developer keys when they’re no longer required (this limits the number of entry points into your account) </li>
                                                        <li>have a leavers’ process, so that a developer's API key is revoked when they leave</li>
                                                      </ul>

                                                      <h4>
                                                        <a id="securing-your-integration-with-govuk-pay" class="anchor" href="#securing-your-integration-with-govuk-pay" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Securing your integration with GOV.UK Pay</h4>

                                                        <p>Make sure you’ve fully tested your integration with GOV.UK Pay. When doing so, take care not to use any real card numbers. Read our testing section for more details. </p>

                                                        <h4>
                                                          <a id="securing-user-information" class="anchor" href="#securing-user-information" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Securing user information</h4>

                                                          <p>GOV.UK Pay doesn’t store full card numbers or CVV data for security reasons. This means you won’t be able to search for transactions using card numbers. You’ll only be able to look up certain transactions using the:</p>

                                                          <ul>
                                                            <li>payment ID </li>
                                                            <li>reference metadata put into the system when creating the payment ID </li>
                                                          </ul>

                                                          <h4>
                                                            <a id="payment-card-industry-pci-compliance" class="anchor" href="#payment-card-industry-pci-compliance" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Payment Card Industry (PCI) compliance</h4>

                                                            <p>A major benefit of integrating with GOV.UK Pay is that you’ll have immediate access to a fully secure and PCI accredited platform. </p>

                                                            <p><a href="https://www.pcisecuritystandards.org/">The Payment Card Industry Security Standards Council</a> is an open global forum, launched in 2006, that develops, maintains and manages the PCI Security Standards. These cover everything from the point of entry of card data into a system, to how the data is processed, through to secure payment applications.</p>

                                                            <p>Compliance with PCI Security Standards is governed by the payment brands and their partners. Although the GOV.UK Pay team has completed the majority of work to ensure compliance with the PCI standard, your service may be asked by your payment provider to supply extra evidence on your internal security protocols. You will have to complete a self-assessment questionnaire called the <a href="https://www.pcisecuritystandards.org/assessors_and_solutions/give_assessor_feedback">PCI DSS SAQ</a> that will include a series of yes or no questions about your security practises. Your service manager may also be asked to undertake security awareness training to ensure they are qualified to handle credit card data.</p>

                                                            <h4>
                                                              <a id="https" class="anchor" href="#https" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>HTTPS</h4>

                                                              <p>GOV.UK Pay follows <a href="https://www.gov.uk/service-manual/domain-names/https.html">government HTTPS security guidelines</a>. The Hypertext Transfer Protocol Secure (HTTPS), which involves the Transport Layer Security  (TLS) protocol is used by the platform to authenticate servers and clients/secure connections.</p>

                                                              <p>Your government service will only be able to integrate with the GOV.UK Pay if it also uses HTTPS.</p>


                                                              <h1>Contribute</h1>

                                                              <p>Currently GOV.UK Pay is not open source, but we’re planning to change that very soon. At the moment, we can invite developers from other service teams to collaborate with us. </p>

                                                              <p>We hope to soon invite everyone to be involved in our project, allowing you all to raise pull requests on Github and contribute to our code. Please stay tuned. </p>

                                                              <blockquote>
                                                                <p>If you’d like to speak to us about writing a developer library for GOV.UK Pay, we’d love to hear from you: please <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">email us</a></p>
                                                              </blockquote>


                                                              <h1>Support, contact and more information</h1>

                                                              <p>If your problem is not addressed in this documentation, please contact us at <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">govuk-pay-support@digital.cabinet-office.gov.uk</a>, including any error messages you’re getting.</p>

                                                              <h4>
                                                                <a id="newsletter-and-blogs" class="anchor" href="#newsletter-and-blogs" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Newsletter and blogs</h4>

                                                                <p>GOV.UK Pay publishes a newsletter every few weeks. This will help you stay updated with any new features we release. </p>

                                                                <p>We’ll also blog about our progress using the <a href="https://governmentasaplatform.blog.gov.uk/">Government as a Platform blog</a> or the GDS blog. </p>

                                                                <p>Posts we've published are:</p>

                                                                <ul>
                                                                  <li><a href="https://gds.blog.gov.uk/2015/10/15/introducing-gov-uk-pay/">Introducing GOV.UK Pay</a></li>
                                                                  <li><a href="https://gds.blog.gov.uk/2015/07/23/making-payments-more-convenient-and-efficient/">Making payments more convenient and efficient</a></li>
                                                                  <li><a href="https://governmentasaplatform.blog.gov.uk/2016/03/31/building-pay/">Building GOV.UK Pay</a></li>
                                                                  <li><a href="https://governmentasaplatform.blog.gov.uk/2016/06/30/partners-in-research/">Partners in research</a></li>
                                                                  <li><a href="https://governmentasaplatform.blog.gov.uk/2016/04/21/trust-online-payments/">Building trust in online card payments</a></li>
                                                                  <li><a href="https://gds.blog.gov.uk/2016/02/05/a-hack-day-to-test-government-as-a-platform/">A hack day to test Government as a Platform</a></li>
                                                                  <li><a href="https://governmentasaplatform.blog.gov.uk/2016/07/29/pay-pci-accreditation/">GOV.UK Pay gets Payment Card Industry (PCI) accreditation</a></li>
                                                                  <li><a href="https://governmentasaplatform.blog.gov.uk/2016/09/16/ready-for-business/">GOV.UK Pay is ready for business</a></li>
                                                                </ul>

                                                                <h4>
                                                                  <a id="press-coverage" class="anchor" href="#press-coverage" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Press coverage</h4>

                                                                  <p>More coverage of the platform can be found in press reports. Published articles include:</p>

                                                                  <ul>
                                                                    <li>Computer Weekly <a href="http://www.computerweekly.com/news/4500250431/GDS-unveils-payments-platform-protoype-in-government-as-a-platform-strategy">unveiling the payments platform</a> (23 July 2015)</li>
                                                                    <li>Government Computing <a href="http://central-government.governmentcomputing.com/news/gds-develops-payments-platform-prototype-4630065">writing about the prototype</a> (23 July 2015)</li>
                                                                    <li>Payment Eye <a href="http://www.paymenteye.com/2015/07/24/uk-government-develops-prototype-payments-platform/">outlining our 4 main goals</a> (24 July 2015)</li>
                                                                    <li>Diginomica on <a href="http://diginomica.com/2015/08/13/gds-government-as-a-platform-ambitions-are-misunderstood-its-not-about-control/#.VjoZK6RD014">how GOV.UK fits with the government as a platform strategy</a> (18 August 2015)</li>
                                                                    <li>IT Pro covering <a href="http://www.itpro.co.uk/government-it-strategy/25031/gds-payment-tool-govuk-pay-enters-beta-testing">our first partnerships</a> (15 October 2015)</li>
                                                                    <li>Computer Weekly writing about <a href="http://www.computerweekly.com/news/4500255549/GDS-payments-platform-Govuk-Pay-to-start-taking-real-payments">our background and launch</a> (15 October 2015)</li>
                                                                    <li>UKAuthority.com covering our <a href="http://www.ukauthority.com/news/5700/common-payments-platform-moves-into-beta">move into beta</a> (16 October 2015)</li>
                                                                    <li>Computer Weekly <a href="http://www.computerweekly.com/news/4500272567/Interview-Till-Wirth-product-manager-Govuk-Pay-at-GDS">interviews GOV.UK Pay's Product Manager</a> (11 February 2016)</li>
                                                                  </ul>

                                                                  <h1>Case studies </h1>

                                                                  <p>We’re looking forward to producing these. Please bear with us, as we’re currently only a beta platform. </p>

                                                                  <blockquote>
                                                                    <p>If you are a beta partner and think your service could to be featured in our case study section, please <a href="mailto:govuk-pay-support@digital.cabinet-office.gov.uk">email us</a>.</p>
                                                                  </blockquote>

                                                                  <h1>Glossary of terms</h1>

                                                                  <table>
                                                                    <thead>
                                                                      <tr>
                                                                        <th>Term</th>
                                                                        <th>Definition</th>
                                                                      </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td>Service admin site</td>
                                                                        <td>the site where your staff users can sign in to view transaction history and settings for your integration with GOV.UK Pay</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>Payment pages</td>
                                                                        <td>the pages on GOV.UK Pay which users follow to make a payment</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>End user</td>
                                                                        <td>a user who is paying through GOV.UK Pay</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>Staff user</td>
                                                                        <td>a user from a team delivering a government service which uses GOV.UK Pay to process payments; if you're reading this, someone like you</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>Platform administrator</td>
                                                                        <td>this is a member of the GOV.UK Pay team responsible for controlling access to the platform, ensuring effective support is provided to partner services, and improving the platform on the basis of user feedback</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>Platform developer</td>
                                                                        <td>a member of the GOV.UK dev team</td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>

                                                                  <h4>
                                                                    <a id="platform-accounts" class="anchor" href="#platform-accounts" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Platform accounts</h4>

                                                                    <table>
                                                                      <thead>
                                                                        <tr>
                                                                          <th>Account type</th>
                                                                          <th>Account definition</th>
                                                                        </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                        <tr>
                                                                          <td>Staff account</td>
                                                                          <td>an account for a staff user that grants appropriate access rights and permissions to administer payments for their service through GOV.UK Pay. Initially, all staff accounts will have the same permissions. But in future they will be distinguished by different permissions relating to the different user groups outlined: Service Admin, Accountant, Refund Manager, Developer</td>
                                                                        </tr>
                                                                        <tr>
                                                                          <td>Service account</td>
                                                                          <td>an account for a partner service with GOV.UK Pay. It is this account that staff users will be accessing. The Service Account will associate all relevant information and preferences with a particular service (e.g. transaction history, selected providers, accepted payment methods, etc).</td>
                                                                        </tr>
                                                                        <tr>
                                                                          <td>Provider account</td>
                                                                          <td>an account that a partner service has with a payment provider for payment processing. Each service may have separate provider accounts with multiple providers</td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>



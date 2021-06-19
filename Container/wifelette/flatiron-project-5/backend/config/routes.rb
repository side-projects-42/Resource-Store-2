Rails.application.routes.draw do

  # This is copy/pasted from the Graphiti docs. It's saying "please make Vandal available at /vandal". And my API routes live in here as per the docs. This also tells them to default to the jsonapi format, not plain json. In my JS, I can be explicit about which format I want.
  scope path: ApplicationResource.endpoint_namespace, defaults: { format: :jsonapi } do
    resources :days
    resources :schedule_items
    resources :materials
    resources :activities

    mount VandalUi::Engine, at: '/vandal'
  end
end

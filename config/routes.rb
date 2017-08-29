Rails.application.routes.draw do

  scope '/api' do
    devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  end

  namespace :api do
    resources :services, except: [:new, :edit]
  end

  root 'welcome#index'
end

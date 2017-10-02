Rails.application.routes.draw do

  scope '/api' do
    devise_for :users, :skip => [:update, :destroy], :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", :sessions => 'sessions', :registrations => 'registrations' }
  end

  namespace :api do
    resources :services, except: [:new, :edit]
    resources :users, only: [:show, :update, :destroy]
  end

  root 'welcome#index'
end
